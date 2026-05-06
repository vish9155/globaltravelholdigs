import dotenv from 'dotenv'
dotenv.config()

import Booking from "../models/Booking.js";

import razorpay from "../utils/razarpay.js";
import crypto from "crypto"

export let createRazorpayOrder = async (req, resp) => {
    try {

        let { passengers, offerId } = req.body;

       console.log(passengers,offerId)

        //  revalidate offer
        let response = await fetch(
            `https://api.duffel.com/air/offers/${offerId}`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.DUFFEL_API}`,
                    "Content-Type": "application/json",
                    "Duffel-Version": "v2",
                },
            }
        );

        response = await response.json();

        //  expired
        if (!response.data) {
            return resp.status(400).json({
                status: false,
                message: "Offer expired",
            });
        }

        //  total amount
        let amount = Number(response.data.total_amount);

        //  create razorpay order
        let options = {
            amount: Math.round(100 * 100),

            currency: "INR",

            receipt: `receipt_${Date.now()}`,

            notes: {
                userId: req.user.id,
                purpose: "Flight Booking Payment",
            },
        };

        let order = await razorpay.orders.create(options);

        // save temp booking in database
        let paymentData = await Booking.create({
            userId: req.user.id,

            offerId,

            amount:100,

            currency: "",

            razorpay_order_id: order.id,

            paymentStatus: "pending",

            bookingStatus: "pending",

            passengers,

            expiresAt: new Date(
                Date.now() + 15 * 60 * 1000
            ),
        });

        //  response
        resp.status(200).json({
            status: true,

            key: process.env.RAZORPAY_KEY_ID,

            amount: order.amount,

            currency: order.currency,

            orderId: order.id,

            bookingId: paymentData._id,

            order,
        });

    } catch (error) {

        resp.status(500).json({
            status:false,
            message: "Failed to create payment",
            error: error.message,
        });
    }
};

// to verify the payment and create duffel order confirm booking;

export let verifybooking = async (req, resp) => {
    try {
        let { razorpay_order_id, razorpay_payment_id, razorpay_signature, bookingId } = req.body;
        let booking = await Booking.findById(bookingId);
        if (!booking) {
            return resp.send({
                message: "Booking Not Found",
                status: false
            })
        }

        if (booking.paymentStatus === "paid") {
            return resp.send({
                message: "Payment Already Verified",
                status: false
            })
        }

        let expectedSignature =  razorpay_order_id + "|" + razorpay_payment_id
        let sign = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(expectedSignature)
            .digest("hex")

        let isValid = razorpay_signature === sign

        if (!isValid) {
            return resp.json({
                status: false,
                message: "Invalid Payment Signature"
            })
        }

        booking.paymentStatus = "paid"
        booking.razorpay_payment_id = razorpay_payment_id,
            booking.razorpay_signature = razorpay_signature
        await booking.save()

        const formattedPassengers =
            booking.passengers.map((p) => {

                const passenger = {

                    type: p.type,

                    given_name:
                        p.firstName,

                    family_name:
                        p.lastName,

                    gender:
                        p.gender.toUpperCase(),

                    born_on:
                        new Date(p.dob)
                            .toISOString()
                            .split("T")[0],
                };

                //  passport
                if (
                    p.passport &&
                    p.passport.number
                ) {

                    passenger.identity_documents = [
                        {
                            type: "passport",

                            number:
                                p.passport.number,

                            expiry_date:
                                new Date(
                                    p.passport.expiry
                                )
                                    .toISOString()
                                    .split("T")[0],

                            issuing_country_code:
                                p.passport.country,
                        },
                    ];
                }

                return passenger;
            });

        let duffelResponse = await fetch(
            "https://api.duffel.com/air/orders",
            {
                method: "POST",

                headers: {
                    Authorization: `Bearer  ${process.env.DUFFEL_API}`,

                    "Duffel-Version": "v2",

                    "Content-Type":
                        "application/json",
                },

                body: JSON.stringify({
                    data: {
                        type: "instant",

                        selected_offers: [
                            booking.offerId,
                        ],

                        passengers: formattedPassengers,
                    },
                }),
            }
        );

        duffelResponse = await duffelResponse.json();
        if (duffelResponse.errors) {

            booking.bookingStatus = "failed";

            booking.duffelResponse =
                duffelResponse;

            await booking.save();

            return resp.status(400).json({
                status:false,
                message: "Duffel booking failed",
                errors: duffelResponse.errors,
            });
        }

        booking.bookingStatus =
            "confirmed";

        booking.orderId =
            duffelResponse.data.id;

        booking.pnr =
            duffelResponse.data.booking_reference;

        booking.airlinePnr =
            duffelResponse.data.slices?.[0]
                ?.segments?.[0]
                ?.operating_carrier_reference ||
            null;

        booking.duffelResponse =
            duffelResponse.data;

        await booking.save();

        // ==========================================
        //  SUCCESS RESPONSE
        // ==========================================

        resp.status(200).json({
            status:true,

            message:
                "Flight booked successfully",

            bookingId: booking._id,

            orderId: booking.orderId,

            pnr: booking.pnr,

            booking,
        });

    } catch (error) {
        resp.status(500).json({
            status:false,
            message: "Failed to create payment",
            error: error.message,
        });
    }
}