import enquiry from "../models/Enquiry.js";
import transport from "../utils/nodemailer.js";

import Joi from "joi";

let enquiryValidation = Joi.object({
    name: Joi.string()
        .min(3)
        .max(50)
        .required()
        .messages({
            "string.empty": "Name is required",
            "string.min": "Name must be at least 3 characters",
            "string.max": "Name cannot exceed 50 characters",
        }),

    email: Joi.string()
        .email()
        .required()
        .messages({
            "string.empty": "Email is required",
            "string.email": "Invalid email format",
        }),

    phone: Joi.string()
        .pattern(/^[0-9]{10}$/)
        .required()
        .messages({
            "string.empty": "Phone number is required",
            "string.pattern.base": "Phone number must be 10 digits",
        }),

    message: Joi.string()
        .min(10)
        .max(500)
        .required()
        .messages({
            "string.empty": "Message is required",
            "string.min": "Message must be at least 10 characters",
            "string.max": "Message cannot exceed 500 characters",
        }),
});

export let enquiryForm = async (req, resp) => {
    try {

        let { error } = enquiryValidation.validate(req.body);

        if (error) {
            return resp.send({
                message: error.details[0].message,
                status: false,
            });
        }


        let { name, email, phone, message } = req.body;


       
        let data = await enquiry.create({
            name,
            email,
            phone,
            message,
        });

        // Email to User
        await transport.sendMail({
            from: `"Global Travel Holdings" <${process.env.USER_EMAIL}>`,
            to: email,
            subject: "Thank You For Contacting Global Travel Holdings",
            html: `
      <div style="font-family: Arial, sans-serif; background:#f4f4f4; padding:40px;">
        
        <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
          
          <div style="background:#0d6efd; padding:20px; text-align:center;">
            <h1 style="color:#ffffff; margin:0;">
              Global Travel Holdings
            </h1>
          </div>

          <div style="padding:30px;">
            
            <h2 style="color:#333;">Hello ${name},</h2>

            <p style="font-size:16px; color:#555; line-height:1.7;">
              Thank you for contacting <b>Global Travel Holdings</b>.
              We have successfully received your enquiry.
            </p>

            <div style="background:#f8f9fa; padding:20px; border-radius:8px; margin:25px 0;">
              
              <h3 style="margin-top:0; color:#0d6efd;">
                Your Submitted Details
              </h3>

              <p><b>Name:</b> ${name}</p>
              <p><b>Email:</b> ${email}</p>
              <p><b>Phone:</b> ${phone}</p>
              <p><b>Message:</b> ${message}</p>
            </div>

            <p style="font-size:16px; color:#555; line-height:1.7;">
              Our team will get back to you shortly.
            </p>

            <div style="text-align:center; margin-top:30px;">
              <a 
                href="https://www.globaltravel-holdings.com/"
                style="
                  background:#0d6efd;
                  color:#ffffff;
                  padding:12px 24px;
                  text-decoration:none;
                  border-radius:5px;
                  display:inline-block;
                  font-weight:bold;
                "
              >
                Visit Website
              </a>
            </div>

          </div>

          <div style="background:#f1f1f1; padding:15px; text-align:center; font-size:14px; color:#777;">
            © ${new Date().getFullYear()} Global Travel Holdings. All Rights Reserved.
          </div>

        </div>

      </div>
      `,
        });

        resp.send({
            message: "Data has successfully sent",
            status: true,
            data,
        });

    } catch (error) {
        console.log(error);

        resp.send({
            message: "Something went wrong",
            status: false,
        });
    }
};