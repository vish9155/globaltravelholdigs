import twilio from 'twilio'

let twilioClient=twilio(process.env.TWILIO_SID,process.env.TWILIO_AUTH)

export default twilioClient;