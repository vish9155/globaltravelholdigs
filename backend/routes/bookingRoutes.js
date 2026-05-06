import express from 'express'
import { createRazorpayOrder, verifybooking } from '../controllers/bookingController.js'
import { authmidd } from '../middlewares/authMiddleware.js'

let router=express.Router()

router.post("/create-payment",authmidd, createRazorpayOrder)
router.post("/verify-payment", authmidd,verifybooking)

export default router