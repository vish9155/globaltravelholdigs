import express from 'express'
import { createRazorpayOrder, verifybooking } from '../controllers/bookingController.js'
import { authmidd } from '../middlewares/authMiddleware.js'
import rateLimit from 'express-rate-limit';

let router = express.Router()

const paymentLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 min
    max: 5,
    message: {
        success: false,
        message: "Too many payment requests. Try again later."
    }
});

router.post(
    "/create-payment",
    paymentLimiter,
    authmidd,
    createRazorpayOrder
);

router.post(
    "/verify-payment",
    paymentLimiter,
    authmidd,
    verifybooking
);

export default router