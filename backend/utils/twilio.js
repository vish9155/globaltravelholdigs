
import twilio from 'twilio'

let twilioClient=twilio(process.env.TWILIO_SID,process.env.TWILIO_AUTH)
console.log(process.env.TWILIO_SID)
console.log(process.env.TWILIO_AUTH)
console.log(process.env.TWILIO_NUMBER)

export default twilioClient;