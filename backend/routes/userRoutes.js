import express from 'express'
import { createUser, emaillogin, emailOtp, forgotPassOtp, imageUpload, login, logout, me, phonelogin, phoneOtp, profile, profileUpdate, resetPass, restpass, verifyEmail } from '../controllers/UserController.js'
import rateLimit from "express-rate-limit";
import { upload } from '../utils/multer.js';
import { authmidd } from '../middlewares/authMiddleware.js';

export let otpLimiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 3,
    message: "Too many OTP requests"
});
let router = express.Router()


router.post("/create", createUser)
router.get("/verify", verifyEmail)
router.post("/login", login)
router.post("/email-otp", otpLimiter, emailOtp);
router.post("/email-login", emaillogin)
router.post("/phone-otp", otpLimiter, phoneOtp)
router.post("/phone-login", phonelogin)
router.post("/forgot-password", otpLimiter, forgotPassOtp)
router.post("/reset-password", resetPass)
router.post("/password-reset/:id", authmidd, restpass)
router.get("/profile/:id", authmidd, profile)
router.put("/profile/update/:id", authmidd, profileUpdate)
router.get("/logout", logout)
router.put("/update-image/:id", authmidd, upload.single("myfile"), imageUpload)
router.get("/me",authmidd, me)
export default router