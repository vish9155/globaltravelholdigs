import mongoose from "mongoose";

let enquirySchema = mongoose.Schema({
    name: { type: String, trim: true, required: [true, "Name is mandatory"] },
    email: { type: String, index: true, required: [true, "Email is mandatory"] },
    phone: { type: String, required: [true, "Phone is mandatory"] },
    message: { type: String, required: [true, "Message is mandatory"] }

}, { timestamps: true })

let enquiry = mongoose.model("enquiry", enquirySchema)

export default enquiry