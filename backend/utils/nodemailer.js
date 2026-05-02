import dotenv from 'dotenv'
dotenv.config()
import nodemailer from 'nodemailer'

let transport=nodemailer.createTransport({
service:"gmail",
auth:{
    pass:process.env.EMAIL_PASS_ID,
    user:process.env.USER_EMAIL
}
})

export default transport;