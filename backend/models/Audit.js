import mongoose from "mongoose";

let auditSchema = new mongoose.Schema({
    userId: String,
    action: String, // LOGIN, LOGOUT, OTP_VERIFY, FAIL_LOGIN
    ip: String,
    device: String,
    location: Object,
    createdAt: { type: Date, default: Date.now }
});

export let Audit = mongoose.model("Audit", auditSchema,"Audit");