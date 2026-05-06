import mongoose from "mongoose";


// ================= PASSENGER SCHEMA =================

const passengerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is mandatory"],
      trim: true,
      uppercase: true,
    },

    middleName: {
      type: String,
      trim: true,
      uppercase: true,
    },

    lastName: {
      type: String,
      required: [true, "Last name is mandatory"],
      trim: true,
      uppercase: true,
    },

    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Other"],
    },

    dob: {
      type: Date,
      required: true,
    },

    nationality: {
      type: String,
      required: true,
      uppercase: true,
    },

    type: {
      type: String,
      required: true,
      enum: ["adult", "child", "infant"],
    },

    //  passport
    passport: {
      number: {
        type: String,
        uppercase: true,
        trim: true,
      },

      country: {
        type: String,
        uppercase: true,
      },

      expiry: {
        type: Date,

        validate: {
          validator: function (val) {
            if (!val) return true;

            return val > new Date();
          },

          message: "Passport expired",
        },
      },

      _id: false,
    },
  },

  {
    _id: false,
  }
);


// ================= BOOKING SCHEMA =================

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    //  Duffel
    offerId: {
      type: String,
      required: true,
    },

    orderId: {
      type: String,
    },

    pnr: {
      type: String,
    },

    airlinePnr: {
      type: String,
    },

    // payment
    razorpay_order_id: String,
    razorpay_payment_id: String,
    razorpay_signature: String,

    
    amount: {
      type: Number,
      required: true,
    },

    currency: {
      type: String,
      default: "INR",
    },
offerPassengers:{
  type:Array
},
    paymentStatus: {
      type: String,

      enum: [
        "pending",
        "paid",
        "failed",
        "refunded",
      ],

      default: "pending",
    },

    bookingStatus: {
      type: String,

      enum: [
        "pending",
        "confirmed",
        "cancelled",
        "failed",
      ],

      default: "pending",
    },

    passengers: [passengerSchema],

    //  full response backup
    duffelResponse: {
      type: Object,
    },

    // metadata
    expiresAt: {
      type: Date,
    },
  },

  {
    timestamps: true,
  }
);



// ================= EXPORT =================

const Booking = mongoose.model(
  "Booking",
  bookingSchema
);

export default Booking;