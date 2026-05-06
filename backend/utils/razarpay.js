import dotenv from 'dotenv'
dotenv.config()
import Razorpay from "razorpay"

let razorpay=new Razorpay({
key_secret:process.env.RAZORPAY_KEY_SECRET,
key_id:process.env.RAZORPAY_KEY_ID
})

export default razorpay