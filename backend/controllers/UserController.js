
import Joi from "joi";
import Users from "../models/Users.js";
import { UAParser } from "ua-parser-js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import geoip from "geoip-lite"
import transport from "../utils/nodemailer.js";

import { deleteOtp, generateOtp, getOtp, saveOtp } from '../utils/otpServices.js';
import { Audit } from '../models/Audit.js';
import twilioClient from '../utils/twilio.js';
import cloudinary from '../utils/cloudinary.js';
import client from '../config/redisConfig.js';
import DeviceDetector from "device-detector-js";

let detector = new DeviceDetector();

let registerValidate = Joi.object({
  name: Joi.string()
    .min(3)
    .max(60)
    .required()
    .messages({
      "string.empty": "Name is required",
      "string.min": "Name must be at least 3 characters",
      "string.max": "Name must be less than 60 characters",
    }),

  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Enter a valid email address",
    }),

  password: Joi.string()
    .min(6)
    .max(16)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!.#$&%^*+=\/-]).+$/)
    .required()
    .messages({
      "string.empty": "Password is required",
      "string.min": "Password must be at least 6 characters",
      "string.max": "Password must be less than 16 characters",
      "string.pattern.base":
        "Password must contain uppercase, lowercase, number and special character",
    }),


  phone: Joi.string()
    .pattern(/^\+[1-9]\d{6,14}$/)
    .required()
    .messages({
      "string.empty": "Phone number is required",
      "string.pattern.base":
        "Phone must be valid with country code (e.g. +919876543210)",
    }),

  role: Joi.string()
    .valid("user", "admin", "superAdmin")
    .default("user")
    .messages({
      "any.only": "Role must be user, admin or superAdmin",
    }),
});
export let createUser = async (req, resp, next) => {
  try {
    let { name, email, phone, password } = req.body
    let { error } = registerValidate.validate({ name, email, phone, password }, { abortEarly: false })
    if (error) {
      return resp.status(400).json({
        message: error.details[0].message,
        status: false,
        field: error.details[0].path[0]
      });
    }
    let exist = await Users.findOne({ email })
    if (exist) {
      return resp.json({
        message: "user already exist please login",
        status: false,
        exist
      })
    }
    let hasPassword = await bcrypt.hash(password, 10)
    let result = await Users.create({ name, email, phone, password: hasPassword })

    let token = jwt.sign(
      { id: result._id, role: result.role, email: result.email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "5d" }
    );

    resp.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 5 * 24 * 60 * 60 * 1000
    });

    let link = `http://192.168.1.88:5000/user/verify?token=${token}`
    await transport.sendMail({
      from: `"Global Travel Holdings" <${process.env.USER_EMAIL}>`,
      to: result.email,
      subject: "Verify Your Email - Global Travel Holdings",
      text: `Please verify your email: ${link}`,
      html: `
  <div style="font-family: Arial, sans-serif; background:#f4f6f9; padding:20px;">
    
    <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.1);">
      
      <!-- Header -->
      <div style="background:linear-gradient(135deg,#1e3c72,#2a5298); padding:20px; text-align:center; color:#fff;">
        <h1 style="margin:0;">✈️ Global Travel Holdings</h1>
        <p style="margin:5px 0 0;">Your Journey Starts Here</p>
      </div>

      <!-- Body -->
      <div style="padding:30px; text-align:center;">
        <h2 style="color:#333;">Verify Your Email</h2>
        <p style="color:#555; font-size:15px;">
          Thank you for choosing <b>Global Travel Holdings</b>.<br/>
          Please confirm your email address to continue.
        </p>

        <!-- Button -->
        <a href="${link}" 
           style="display:inline-block; margin-top:20px; padding:12px 25px; background:#ff9800; color:#fff; text-decoration:none; border-radius:6px; font-weight:bold;">
           Verify Email
        </a>

        <p style="margin-top:20px; font-size:13px; color:#888;">
          If the button doesn't work, copy and paste this link:<br/>
          <a href="${link}" style="color:#2a5298;">${link}</a>
        </p>
      </div>

      <!-- Footer -->
      <div style="background:#f1f1f1; padding:15px; text-align:center; font-size:12px; color:#777;">
        © ${new Date().getFullYear()} Global Travel Holdings. All rights reserved.<br/>
        Safe travels ✈️
      </div>

    </div>

  </div>
  `
    });


    return resp.json({
      message: "New User Successfully Registered",
      status: true,
      result,
      link
    })

  } catch (error) {
    resp.send({
      message: "Error in New User  Register",
      status: false,
      error: error.message
    })
  }
}

export let verifyEmail = async (req, resp) => {
  try {

    let token = req.query.token;
    if (!token) return resp.json({ message: "Token not exist", status: false })
    jwt.verify(token, process.env.JWT_SECRET_KEY, async (error, decode) => {
      if (error) return resp.send({ message: "Token is Invalid", error: error.message })
      let user = await Users.findOne({ email: decode.email })
      if (!user) return resp.status(404).send({ message: "user not found", success: false })
      if (user.emailVerified) {
        return resp.status(409).send({ message: "Email already verified" });
      }

      user.emailVerified = true
      await user.save()
      if (user.emailVerified) {
        return resp.status(200).send({ message: "Email verified successfull", success: true })

      }
      else {
        return resp.status(403).send({ message: "email not verified", success: false })
      }


    })



  } catch (error) {
    resp.json({
      message: "Error in user Email Verification",
      error: error.message,
      status: false
    })
  }
}






// DEVICE INFO
let getDeviceInfo = (req) => {

  let ua = req.headers["user-agent"];

  let parser = new UAParser(ua);

  let result = parser.getResult();

  let deviceDetect = detector.parse(ua);

  return {

    ip:
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.socket?.remoteAddress ||
      req.ip,

    browser:
      `${result.browser.name || ""} ${result.browser.version || ""}`,

    os:
      `${result.os.name || ""} ${result.os.version || ""}`,

    device:
      deviceDetect.device?.type || "desktop",

    brand:
      deviceDetect.device?.brand || "Unknown",

    model:
      deviceDetect.device?.model || "Unknown",

    cpu:
      result.cpu.architecture || "Unknown"
  };
};




// IP LOCATION
let getIPLocation = async (ip) => {

  try {

    let response = await fetch(
      `https://ipinfo.io/${ip}?token=${process.env.IPINFO_TOKEN}`
    );

    let data = await response.json();

    return {

      city: data.city,

      state: data.region,

      country: data.country,

      zip: data.postal,

      timezone: data.timezone,

      isp: data.org,

      location: data.loc
    };

  } catch (err) {

    // console.log(err.message);

    return null;
  }
};




// LOGIN
export let login = async (req, resp) => {

  try {

    let {

      email,
      password,

      latitude,
      longitude,

      accuracy

    } = req.body;



    // USER
    let user = await Users.findOne({ email });

    if (!user) {

      return resp.json({

        message: "User not found",

        status: false
      });
    }



    // PASSWORD
    let isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {

      return resp.json({

        message: "Invalid password",

        status: false
      });
    }



    // DEVICE
    let device = getDeviceInfo(req);



    // IP LOCATION
    let ipLocation =
      await getIPLocation(device.ip);



    // LOGIN TIME
    let loginTime =
      new Date().toLocaleString();



    // EMAIL
    await transport.sendMail({

      to: email,

      subject: "⚠️ New Login Detected",

      html: `

<div style="margin:0;padding:0;background:#f4f7fb;font-family:Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
    <tr>
      <td align="center">

    <table width="700" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:18px;overflow:hidden;box-shadow:0 10px 35px rgba(0,0,0,0.08);">

      <!-- HEADER -->
      <tr>
        <td style="background:linear-gradient(135deg,#0f172a,#1e293b);padding:30px;text-align:center;">

          <h1 style="margin:0;color:#ffffff;font-size:30px;font-weight:700;">
            Global Travel Holdings
          </h1>

          <p style="margin-top:10px;color:#cbd5e1;font-size:14px;">
            Advanced Account Security Notification
          </p>

        </td>
      </tr>


      <!-- ALERT -->
      <tr>
        <td style="padding:35px;">

          <div style="background:#fff7ed;border:1px solid #fdba74;padding:18px;border-radius:12px;margin-bottom:25px;">

            <h2 style="margin:0;color:#ea580c;font-size:22px;">
              ⚠️ New Login Detected
            </h2>

            <p style="margin-top:10px;color:#7c2d12;font-size:15px;line-height:1.7;">
              A new sign-in to your account was detected. If this was you, no action is needed.
              Otherwise, please secure your account immediately.
            </p>

          </div>


          <!-- MAP -->
          <div style="margin-bottom:30px;">

            <h3 style="margin-bottom:15px;color:#0f172a;">
              📍 Login Coordinates
            </h3>

            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:12px;padding:18px;">

              <tr>
                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  <b>Latitude:</b>
                </td>

                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  ${latitude || "Not Available"}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  <b>Longitude:</b>
                </td>

                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  ${longitude || "Not Available"}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;">
                  <b>GPS Accuracy:</b>
                </td>

                <td style="padding:10px;">
                  ${accuracy || "Unknown"} meters
                </td>
              </tr>

            </table>

          </div>


          <!-- MAP BUTTON -->
          <div style="text-align:center;margin-bottom:35px;">

            <a 
              href="https://www.google.com/maps?q=${latitude},${longitude}"
              style="
                display:inline-block;
                background:linear-gradient(135deg,#2563eb,#1d4ed8);
                color:#ffffff;
                padding:14px 28px;
                border-radius:10px;
                text-decoration:none;
                font-size:15px;
                font-weight:600;
                box-shadow:0 6px 18px rgba(37,99,235,0.3);
              "
            >
              📍 View Exact Location on Map
            </a>

          </div>


          <!-- NETWORK -->
          <div style="margin-bottom:30px;">

            <h3 style="margin-bottom:15px;color:#0f172a;">
              🌍 Network Information
            </h3>

            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:12px;padding:18px;">

              <tr>
                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  <b>IP Address</b>
                </td>

                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  ${device.ip}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  <b>City</b>
                </td>

                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  ${ipLocation?.city || "Unknown"}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  <b>State</b>
                </td>

                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  ${ipLocation?.state || "Unknown"}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  <b>ZIP Code</b>
                </td>

                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  ${ipLocation?.zip || "Unknown"}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  <b>Country</b>
                </td>

                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  ${ipLocation?.country || "Unknown"}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;">
                  <b>Internet Provider</b>
                </td>

                <td style="padding:10px;">
                  ${ipLocation?.isp || "Unknown"}
                </td>
              </tr>

            </table>

          </div>


          <!-- DEVICE -->
          <div style="margin-bottom:30px;">

            <h3 style="margin-bottom:15px;color:#0f172a;">
              💻 Device Information
            </h3>

            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:12px;padding:18px;">

              <tr>
                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  <b>Browser</b>
                </td>

                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  ${device.browser}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  <b>Operating System</b>
                </td>

                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  ${device.os}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  <b>Device Type</b>
                </td>

                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  ${device.device}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  <b>Brand</b>
                </td>

                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  ${device.brand}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;">
                  <b>Model</b>
                </td>

                <td style="padding:10px;">
                  ${device.model}
                </td>
              </tr>

            </table>

          </div>


          <!-- TIME -->
          <div style="background:#eff6ff;border:1px solid #bfdbfe;padding:18px;border-radius:12px;">

            <h3 style="margin-top:0;color:#1d4ed8;">
              🕒 Login Activity
            </h3>

            <p style="margin:8px 0;font-size:15px;">
              <b>Login Time:</b> ${loginTime}
            </p>

          </div>


          <!-- SECURITY WARNING -->
          <div style="margin-top:35px;background:#fef2f2;border:1px solid #fecaca;padding:18px;border-radius:12px;">

            <h3 style="margin-top:0;color:#dc2626;">
              🔒 Security Recommendation
            </h3>

            <p style="margin:0;color:#7f1d1d;line-height:1.7;">
              If you do not recognize this activity, immediately change your password
              and review your account security settings.
            </p>

          </div>

        </td>
      </tr>


      <!-- FOOTER -->
      <tr>
        <td style="background:#0f172a;padding:22px;text-align:center;">

          <p style="margin:0;color:#cbd5e1;font-size:13px;">
            © 2026 Global Travel Holdings. All rights reserved.
          </p>

          <p style="margin-top:8px;color:#94a3b8;font-size:12px;">
            This is an automated security notification generated by our monitoring system.
          </p>

        </td>
      </tr>

    </table>

  </td>
</tr>
  </table>

</div> 



`
    });



    // JWT
    let token = jwt.sign(

      {
        id: user._id
      },

      process.env.JWT_SECRET_KEY,

      {
        expiresIn: "5d"
      }
    );



    resp.cookie("token", token, {

      httpOnly: true,

      secure: true,

      sameSite: "none",

      maxAge: 5 * 24 * 60 * 60 * 1000
    });



    return resp.json({

      message: "Login Success",
      user,
      status: true
    });

  } catch (error) {

    return resp.json({

      message: "Login Error",

      error: error.message,

      status: false
    });
  }
};

export let emailOtp = async (req, resp) => {
  try {
    let { email } = req.body;

    let user = await Users.findOne({ email });
    if (!user) {
      return res.json({ message: "User not found", status: false });
    }

    // Rate limit check (see next section)
    let count = await client.get(`otp_count:${email}`);
    if (count && count >= 3) {
      return res.json({
        message: "Too many OTP requests. Try later.",
        status: false
      });
    }

    let otp = generateOtp();

    await saveOtp("email", email, otp);

    // count increment
    await client.incr(`otp_count:${email}`);
    await client.expire(`otp_count:${email}`, 300);
    transport.sendMail({
      to: email,
      subject: "Your OTP for Secure Login - Global Travel Holding",
      text: `Your OTP is ${otp}`,
      html: `
    <div style="font-family: Arial, sans-serif; background-color:#f4f6f8; padding:20px;">
        <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
            
            <!-- Header -->
            <div style="background:#0a2540; color:#ffffff; padding:20px; text-align:center;">
                <h2 style="margin:0;">Global Travel Holding</h2>
                <p style="margin:5px 0 0; font-size:14px;">Secure Login Verification</p>
            </div>

            <!-- Body -->
            <div style="padding:30px; text-align:center;">
                <h3 style="color:#333;">Your One-Time Password (OTP)</h3>
                <p style="color:#555; font-size:14px;">
                    Use the OTP below to complete your login. This code is valid for a limited time.
                </p>

                <!-- OTP Box -->
                <div style="margin:20px auto; padding:15px; background:#f1f5f9; border-radius:8px; display:inline-block;">
                    <span style="font-size:28px; font-weight:bold; letter-spacing:5px; color:#0a2540;">
                        ${otp}
                    </span>
                </div>

                <p style="color:#777; font-size:13px;">
                    If you did not request this, please ignore this email.
                </p>
            </div>

            <!-- Footer -->
            <div style="background:#f4f6f8; padding:15px; text-align:center; font-size:12px; color:#888;">
                © ${new Date().getFullYear()} Global Travel Holding. All rights reserved.
            </div>
        </div>
    </div>
    `
    })
    resp.send({ message: "Otp Send Successfull", status: true, user })

  } catch (error) {
    resp.json({
      message: "Error in Send Otp For Email Login",
      error: error.message,
      status: false
    })
  }
}

export let emaillogin = async (req, resp) => {
  try {
    let { email, otp, latitude, longitude, accuracy } = req.body;

    let storedOtp = await getOtp("email", email);
    if (!storedOtp) {
      return resp.json({ message: "OTP expired", status: false });
    }

    if (storedOtp !== otp) {
      return resp.json({ message: "Invalid OTP", status: false });
    }

    await deleteOtp("email", email);

    let user = await Users.findOne({ email });

    // DEVICE
    let device = getDeviceInfo(req);



    // IP LOCATION
    let ipLocation =
      await getIPLocation(device.ip);



    // LOGIN TIME
    let loginTime =
      new Date().toLocaleString();



    // EMAIL
    await transport.sendMail({

      to: email,

      subject: "⚠️ New Login Detected",

      html: `

<div style="margin:0;padding:0;background:#f4f7fb;font-family:Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
    <tr>
      <td align="center">

    <table width="700" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:18px;overflow:hidden;box-shadow:0 10px 35px rgba(0,0,0,0.08);">

      <!-- HEADER -->
      <tr>
        <td style="background:linear-gradient(135deg,#0f172a,#1e293b);padding:30px;text-align:center;">

          <h1 style="margin:0;color:#ffffff;font-size:30px;font-weight:700;">
            Global Travel Holdings
          </h1>

          <p style="margin-top:10px;color:#cbd5e1;font-size:14px;">
            Advanced Account Security Notification
          </p>

        </td>
      </tr>


      <!-- ALERT -->
      <tr>
        <td style="padding:35px;">

          <div style="background:#fff7ed;border:1px solid #fdba74;padding:18px;border-radius:12px;margin-bottom:25px;">

            <h2 style="margin:0;color:#ea580c;font-size:22px;">
              ⚠️ New Login Detected
            </h2>

            <p style="margin-top:10px;color:#7c2d12;font-size:15px;line-height:1.7;">
              A new sign-in to your account was detected. If this was you, no action is needed.
              Otherwise, please secure your account immediately.
            </p>

          </div>


          <!-- MAP -->
          <div style="margin-bottom:30px;">

            <h3 style="margin-bottom:15px;color:#0f172a;">
              📍 Login Coordinates
            </h3>

            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:12px;padding:18px;">

              <tr>
                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  <b>Latitude:</b>
                </td>

                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  ${latitude || "Not Available"}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  <b>Longitude:</b>
                </td>

                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  ${longitude || "Not Available"}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;">
                  <b>GPS Accuracy:</b>
                </td>

                <td style="padding:10px;">
                  ${accuracy || "Unknown"} meters
                </td>
              </tr>

            </table>

          </div>


          <!-- MAP BUTTON -->
          <div style="text-align:center;margin-bottom:35px;">

            <a 
              href="https://www.google.com/maps?q=${latitude},${longitude}"
              style="
                display:inline-block;
                background:linear-gradient(135deg,#2563eb,#1d4ed8);
                color:#ffffff;
                padding:14px 28px;
                border-radius:10px;
                text-decoration:none;
                font-size:15px;
                font-weight:600;
                box-shadow:0 6px 18px rgba(37,99,235,0.3);
              "
            >
              📍 View Exact Location on Map
            </a>

          </div>


          <!-- NETWORK -->
          <div style="margin-bottom:30px;">

            <h3 style="margin-bottom:15px;color:#0f172a;">
              🌍 Network Information
            </h3>

            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:12px;padding:18px;">

              <tr>
                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  <b>IP Address</b>
                </td>

                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  ${device.ip}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  <b>City</b>
                </td>

                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  ${ipLocation?.city || "Unknown"}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  <b>State</b>
                </td>

                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  ${ipLocation?.state || "Unknown"}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  <b>ZIP Code</b>
                </td>

                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  ${ipLocation?.zip || "Unknown"}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  <b>Country</b>
                </td>

                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  ${ipLocation?.country || "Unknown"}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;">
                  <b>Internet Provider</b>
                </td>

                <td style="padding:10px;">
                  ${ipLocation?.isp || "Unknown"}
                </td>
              </tr>

            </table>

          </div>


          <!-- DEVICE -->
          <div style="margin-bottom:30px;">

            <h3 style="margin-bottom:15px;color:#0f172a;">
              💻 Device Information
            </h3>

            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:12px;padding:18px;">

              <tr>
                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  <b>Browser</b>
                </td>

                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  ${device.browser}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  <b>Operating System</b>
                </td>

                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  ${device.os}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  <b>Device Type</b>
                </td>

                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  ${device.device}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  <b>Brand</b>
                </td>

                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  ${device.brand}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;">
                  <b>Model</b>
                </td>

                <td style="padding:10px;">
                  ${device.model}
                </td>
              </tr>

            </table>

          </div>


          <!-- TIME -->
          <div style="background:#eff6ff;border:1px solid #bfdbfe;padding:18px;border-radius:12px;">

            <h3 style="margin-top:0;color:#1d4ed8;">
              🕒 Login Activity
            </h3>

            <p style="margin:8px 0;font-size:15px;">
              <b>Login Time:</b> ${loginTime}
            </p>

          </div>


          <!-- SECURITY WARNING -->
          <div style="margin-top:35px;background:#fef2f2;border:1px solid #fecaca;padding:18px;border-radius:12px;">

            <h3 style="margin-top:0;color:#dc2626;">
              🔒 Security Recommendation
            </h3>

            <p style="margin:0;color:#7f1d1d;line-height:1.7;">
              If you do not recognize this activity, immediately change your password
              and review your account security settings.
            </p>

          </div>

        </td>
      </tr>


      <!-- FOOTER -->
      <tr>
        <td style="background:#0f172a;padding:22px;text-align:center;">

          <p style="margin:0;color:#cbd5e1;font-size:13px;">
            © 2026 Global Travel Holdings. All rights reserved.
          </p>

          <p style="margin-top:8px;color:#94a3b8;font-size:12px;">
            This is an automated security notification generated by our monitoring system.
          </p>

        </td>
      </tr>

    </table>

  </td>
</tr>
  </table>

</div> 



`
    });

    //  AUDIT LOG ke liye use karte hai isko 

    console.log(user)
    console.log(process.env.JWT_SECRET_KEY)

    let tokens = jwt.sign({ id: user._id, email: user.email, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' })
    resp.cookie("token", tokens, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 5 * 24 * 60 * 60 * 1000
    })
    return resp.json({
      message: "User Login Successfully ",
      status: true,
      user,
    })

  } catch (error) {
    resp.json({
      message: "Error in user Email Otp Login",
      error: error,
      status: false
    })
  }
}

export let phoneOtp = async (req, resp) => {
  try {
    let { phone } = req.body;

    let user = await Users.findOne({ phone });
    if (!user) {
      return resp.json({ message: "User not found", status: false });
    }

    // Rate limit check (see next section)
    let count = await client.get(`otp_count:${phone}`);
    if (count && count >= 3) {
      return resp.json({
        message: "Too many OTP requests. Try later.",
        status: false
      });
    }
    console.log(process.env.TWILIO_NUMBER)
    let otp = generateOtp();

    await saveOtp("phone", phone, otp);

    // count increment
    await client.incr(`otp_count:${phone}`);
    await client.expire(`otp_count:${phone}`, 300);

    await twilioClient.messages.create({
      to: phone,
      from: process.env.TWILIO_NUMBER,
      body: `Your OTP is ${otp}. It is valid for 5 minutes.`
    })

    resp.send({ message: "Otp Send Successfull", status: true, user })

  } catch (error) {
    console.log(error);

    resp.json({
      message: "Error in Send Otp For Phone Login",
      error: error.message,
      code: error.code,
      moreInfo: error.moreInfo,
      status: false
    });
  }
}

export let phonelogin = async (req, resp) => {
  try {
    let { phone, otp, latitude, longitude, accuracy } = req.body;

    

    let storedOtp = await getOtp("phone", phone);
    if (!storedOtp) {
      return resp.json({ message: "OTP expired", status: false });
    }

    if (storedOtp !== otp) {
      return resp.json({ message: "Invalid OTP", status: false });
    }

    await deleteOtp("phone", phone);

    let user = await Users.findOne({ phone });
        if (!user) {
      return resp.json({ message: "User not found", status: false ,user});
    }


    // DEVICE
    let device = getDeviceInfo(req);



    // IP LOCATION
    let ipLocation =
      await getIPLocation(device.ip);



    // LOGIN TIME
    let loginTime =
      new Date().toLocaleString();



    // EMAIL
    await transport.sendMail({

      to: email,

      subject: "⚠️ New Login Detected",

      html: `

<div style="margin:0;padding:0;background:#f4f7fb;font-family:Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
    <tr>
      <td align="center">

    <table width="700" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:18px;overflow:hidden;box-shadow:0 10px 35px rgba(0,0,0,0.08);">

      <!-- HEADER -->
      <tr>
        <td style="background:linear-gradient(135deg,#0f172a,#1e293b);padding:30px;text-align:center;">

          <h1 style="margin:0;color:#ffffff;font-size:30px;font-weight:700;">
            Global Travel Holdings
          </h1>

          <p style="margin-top:10px;color:#cbd5e1;font-size:14px;">
            Advanced Account Security Notification
          </p>

        </td>
      </tr>


      <!-- ALERT -->
      <tr>
        <td style="padding:35px;">

          <div style="background:#fff7ed;border:1px solid #fdba74;padding:18px;border-radius:12px;margin-bottom:25px;">

            <h2 style="margin:0;color:#ea580c;font-size:22px;">
              ⚠️ New Login Detected
            </h2>

            <p style="margin-top:10px;color:#7c2d12;font-size:15px;line-height:1.7;">
              A new sign-in to your account was detected. If this was you, no action is needed.
              Otherwise, please secure your account immediately.
            </p>

          </div>


          <!-- MAP -->
          <div style="margin-bottom:30px;">

            <h3 style="margin-bottom:15px;color:#0f172a;">
              📍 Login Coordinates
            </h3>

            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:12px;padding:18px;">

              <tr>
                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  <b>Latitude:</b>
                </td>

                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  ${latitude || "Not Available"}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  <b>Longitude:</b>
                </td>

                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  ${longitude || "Not Available"}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;">
                  <b>GPS Accuracy:</b>
                </td>

                <td style="padding:10px;">
                  ${accuracy || "Unknown"} meters
                </td>
              </tr>

            </table>

          </div>


          <!-- MAP BUTTON -->
          <div style="text-align:center;margin-bottom:35px;">

            <a 
              href="https://www.google.com/maps?q=${latitude},${longitude}"
              style="
                display:inline-block;
                background:linear-gradient(135deg,#2563eb,#1d4ed8);
                color:#ffffff;
                padding:14px 28px;
                border-radius:10px;
                text-decoration:none;
                font-size:15px;
                font-weight:600;
                box-shadow:0 6px 18px rgba(37,99,235,0.3);
              "
            >
              📍 View Exact Location on Map
            </a>

          </div>


          <!-- NETWORK -->
          <div style="margin-bottom:30px;">

            <h3 style="margin-bottom:15px;color:#0f172a;">
              🌍 Network Information
            </h3>

            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:12px;padding:18px;">

              <tr>
                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  <b>IP Address</b>
                </td>

                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  ${device.ip}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  <b>City</b>
                </td>

                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  ${ipLocation?.city || "Unknown"}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  <b>State</b>
                </td>

                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  ${ipLocation?.state || "Unknown"}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  <b>ZIP Code</b>
                </td>

                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  ${ipLocation?.zip || "Unknown"}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  <b>Country</b>
                </td>

                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  ${ipLocation?.country || "Unknown"}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;">
                  <b>Internet Provider</b>
                </td>

                <td style="padding:10px;">
                  ${ipLocation?.isp || "Unknown"}
                </td>
              </tr>

            </table>

          </div>


          <!-- DEVICE -->
          <div style="margin-bottom:30px;">

            <h3 style="margin-bottom:15px;color:#0f172a;">
              💻 Device Information
            </h3>

            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:12px;padding:18px;">

              <tr>
                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  <b>Browser</b>
                </td>

                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  ${device.browser}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  <b>Operating System</b>
                </td>

                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  ${device.os}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  <b>Device Type</b>
                </td>

                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  ${device.device}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  <b>Brand</b>
                </td>

                <td style="padding:10px;border-bottom:1px solid #e2e8f0;">
                  ${device.brand}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;">
                  <b>Model</b>
                </td>

                <td style="padding:10px;">
                  ${device.model}
                </td>
              </tr>

            </table>

          </div>


          <!-- TIME -->
          <div style="background:#eff6ff;border:1px solid #bfdbfe;padding:18px;border-radius:12px;">

            <h3 style="margin-top:0;color:#1d4ed8;">
              🕒 Login Activity
            </h3>

            <p style="margin:8px 0;font-size:15px;">
              <b>Login Time:</b> ${loginTime}
            </p>

          </div>


          <!-- SECURITY WARNING -->
          <div style="margin-top:35px;background:#fef2f2;border:1px solid #fecaca;padding:18px;border-radius:12px;">

            <h3 style="margin-top:0;color:#dc2626;">
              🔒 Security Recommendation
            </h3>

            <p style="margin:0;color:#7f1d1d;line-height:1.7;">
              If you do not recognize this activity, immediately change your password
              and review your account security settings.
            </p>

          </div>

        </td>
      </tr>


      <!-- FOOTER -->
      <tr>
        <td style="background:#0f172a;padding:22px;text-align:center;">

          <p style="margin:0;color:#cbd5e1;font-size:13px;">
            © 2026 Global Travel Holdings. All rights reserved.
          </p>

          <p style="margin-top:8px;color:#94a3b8;font-size:12px;">
            This is an automated security notification generated by our monitoring system.
          </p>

        </td>
      </tr>

    </table>

  </td>
</tr>
  </table>

</div> 



`
    });
    //  AUDIT LOG ke liye use karte hai isko 

    let tokens = jwt.sign({ id: user._id, email: user.email, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' })
    resp.cookie("token", tokens, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 5 * 24 * 60 * 60 * 1000
    })
    return resp.json({
      message: "User Login Successfully ",
      status: true,
      user,
    })

  } catch (error) {
    resp.json({
      message: "Error in user Phone Otp Login",
      error: error,
      status: false
    })
  }
}

export let forgotPassOtp = async (req, resp) => {
  try {
    let { email } = req.body;
    let user = await Users.findOne({ email });
    if (!user) {
      return resp.json({
        message: "user not found",
        staus: false,
      })
    }

    if (!user.emailVerified) {
      return resp.json({
        message: "Please Verify Email First",
        status: false
      })
    }

    let otp = generateOtp()

    await saveOtp("email", email, otp)
    // console.log(await getOtp("email", email))
    await transport.sendMail({
      to: email,
      subject: "Reset Your Password - Secure OTP",
      text: `Your OTP is ${otp}`,
      html: `
    <div style="font-family: Arial, sans-serif; background-color:#f4f6f8; padding:20px;">
        <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
            
            <!-- Header -->
            <div style="background:#0a2540; color:#ffffff; padding:20px; text-align:center;">
                <h2 style="margin:0;">🔐 Password Reset Request</h2>
            </div>

            <!-- Body -->
            <div style="padding:30px; text-align:center;">
                <h3 style="color:#333;">Your One-Time Password (OTP)</h3>
                <p style="color:#555; font-size:14px;">
                    Use the OTP below to reset your password. This code is valid for 5 minutes.
                </p>

                <!-- OTP BOX -->
                <div style="margin:25px auto; padding:15px 25px; background:#f1f5f9; border-radius:8px; display:inline-block;">
                    <span style="font-size:28px; font-weight:bold; letter-spacing:5px; color:#0a2540;">
                        ${otp}
                    </span>
                </div>

                <p style="color:#777; font-size:13px;">
                    Do not share this OTP with anyone. Our team will never ask for it.
                </p>

                <p style="color:#999; font-size:12px; margin-top:20px;">
                    If you didn’t request a password reset, you can safely ignore this email.
                </p>
            </div>

            <!-- Footer -->
            <div style="background:#f4f6f8; padding:15px; text-align:center; font-size:12px; color:#888;">
                © ${new Date().getFullYear()} Your Company. All rights reserved.
            </div>
        </div>
    </div>
    `
    });
    resp.json({
      message: "otp send successfull",
      status: true
    })

  } catch (error) {
    resp.json({
      message: error.message,

      status: false
    })
  }
}

export let resetPass = async (req, resp) => {
  try {
    let { email, newpassword, otp } = req.body;


    let storedOtp = await getOtp("email", email)

    if (!storedOtp) {
      return resp.json({ message: "OTP expired", status: false });
    }

    if (storedOtp !== otp) {
      return resp.json({ message: "Invalid OTP", status: false });
    }

    await deleteOtp("email", email);

    let user = await Users.findOne({ email });

    if (!user) {
      return resp.send({
        message: "user not found",
        status: false
      })
    }

    if (!user.password) {
      let hashPass = await bcrypt.hash(newpassword, 10);
      user.password = hashPass;
      await user.save();

      await deleteOtp("email", email);

      return resp.json({
        message: "Password set successfully",
        status: true
      });
    }

    let isMatch = await bcrypt.compare(newpassword, user.password)
    if (isMatch) {
      return resp.json({
        message: "new password and old password is same"
      })
    }
    let hashPass = await bcrypt.hash(newpassword, 10)
    user.password = hashPass
    await user.save();
    resp.json({
      messsage: "user password reset successfull",
      status: true
    })

  } catch (error) {
    resp.json({
      messsage: error.message,
      status: false
    })
  }
}

export let logout = async (req, resp) => {
  try {
    resp.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "lax"
    })
    resp.send({ message: "user logout", status: true })
  } catch (error) {
    resp.json({
      messsage: "error in user logout ",
      status: false
    })
  }
}

let passwordValidator = Joi.object({

  oldpass: Joi.string().required(),

  confirmpass: Joi.string()
    .min(6)
    .max(16)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!.#$&%^*+=\/-]).+$/)
    .required()
    .messages({
      "string.pattern.base":
        "Password must contain uppercase, lowercase, number and special character"
    }),
  newpass: Joi.string()
    .min(6)
    .max(16)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!.#$&%^*+=\/-]).+$/)
    .required()
    .messages({
      "string.pattern.base":
        "Password must contain uppercase, lowercase, number and special character"
    }),

});

export let restpass = async (req, resp) => {
  try {
    if (req.user.id !== req.params.id) {
      return resp.send({
        message: "Invalid credentials",
        status: false
      })
    }
    let { confirmpass, newpass, oldpass } = req.body;
    let { error } = passwordValidator.validate({ confirmpass, newpass, oldpass })
    if (error) {
      return resp.status(400).json({
        message: error.details[0].message,
        status: false
      });
    }

    let user = await Users.findById(req.params.id)
    if (!user) {
      return resp.json({
        message: "user not found",
        status: false,
      })
    }

    let isMatch = await bcrypt.compare(oldpass, user.password);
    if (!isMatch) {
      return resp.send({
        message: "current password is invalid",
        status: false,
      })
    }

    let isSame = await bcrypt.compare(newpass, user.password)

    if (isSame) {
      return resp.send({
        message: "New password is not same old password",
        status: false
      })
    }

    if (newpass !== confirmpass) {
      return resp.send({
        message: "New password and confirm password can't match"
      })
    }

    let hash = await bcrypt.hash(newpass, 10);
    user.password = hash;
    await user.save()

    resp.json({
      message: "password reset successfulll",
      status: true
    })


  } catch (error) {
    resp.json({
      messsage: "error in user password reset in profile ",
      status: false
    })
  }
}

export let profile = async (req, resp) => {
  try {
    // console.log(req.user.id , req.params.id)
    if (req.user.id !== req.params.id) {
      return resp.send({
        message: "Invalid credentials",
        status: false
      })
    }
    let user = await Users.findById(req.params.id)
    if (!user) {
      return resp.send({
        message: "user not found",
        status: false
      })
    }
    resp.send({
      message: "Data fetch for user profile",
      user,
      status: true
    })
  } catch (error) {
    resp.json({
      messsage: "error in user profile fetch ",
      result: error.message,
      status: false
    })
  }
}

export let profileUpdate = async (req, resp) => {
  try {
    let data = req.body;
    if (req.user.id !== req.params.id) {
      return resp.send({
        message: "Invalid credentials",
        status: false
      })
    }
    let user = await Users.findByIdAndUpdate(req.user.id, data, { new: true })
    if (!user) {
      return resp.status(404).send({
        message: 'User not found',
        status: false
      });
    }
    resp.send({ message: "update user data fetch", user, status: true })
  } catch (error) {
    resp.json({
      messsage: "error in user update in profile ",
      status: false
    })
  }
}
export let me = async (req, resp) => {
  try {
    let user = await Users.findById(req.user.id).select("-password -otp -OtpExpireIn")

    if (!user) {
      return resp.status(404).send({
        message: "user not found",
        success: false
      })
    }

    resp.send({
      message: "current user fetch",
      status: true,
      user
    })
  }
  catch (err) {
    resp.status(500).send({
      message: "internal server error",
      status: false,
      error: err.message
    })
  }
}
export let imageUpload = async (req, resp) => {
  try {
    if (req.user.id !== req.params.id) {
      return resp.send({
        message: "Invalid credentials",
        status: false
      })
    }
    let user = await Users.findById(req.params.id)
    if (!user) {
      return resp.status(404).send({
        message: 'User not found',
        success: false
      });
    }
    if (!req.file) {
      return resp.status(400).send({
        message: "No image uploaded",
        success: false
      });
    }


    if (user.avatarPublicId) {
      await cloudinary.uploader.destroy(user.avatarPublicId)
    }

    user.avatar = req.file.path;
    user.avatarPublicId = req.file.filename;
    await user.save()
    resp.status(200).send({
      message: "Image uploaded successfully",
      status: true,
      user,
      file: req.file.path
    });
  } catch (error) {
    resp.status(500).send({
      message: "internal server error",
      status: false,
      error: err.message
    })
  }
}