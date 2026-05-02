import mongoose from "mongoose";
import bcrypt from "bcrypt";

let userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "this field is mandatory"],
    trim: true
  },

  email: {
    type: String,
    required: [true, "this field is mandatory"],
    unique: true,
    lowercase: true,
    // index: true, // yeaha bhi kar sakte ho ya niche jo maine kiya waise bhi dono best new developer dekh lena
    match: [/^\S+@\S+\.\S+$/, "Invalid email"]
  },

  phone: {
    type: String,
    index: true,
    sparse: true
  },

  password: {
    type: String,
    required: function () {
      return this.provider === "local"
    }
  },

  emailVerified: {
    type: Boolean,
    default: false
  },

  otp: {
    code: Number,
    expireAt: Date
  },

  role: {
    type: String,
    enum: ["user", "admin", "superadmin"],
    default: "user"
  },

  avatar: {
    type: String,
    default: null
  },
  googleId: String,
  facebookId: String,
  githubId: String,
  provider: {
    type: String,
    enum: ["local", "google", "facebook", "github"],
    default: "local"
  },
  country: {
    type: String,
    default: ""
  },

  state: {
    type: String,
    default: ""
  },

  city: {
    type: String,
    default: ""
  },

  zipCode: {
    type: String,
    default: ""
  },

  address: {
    type: String,
    default: ""
  },
  isActive: {
    type: Boolean,
    default: true
  }

}, { timestamps: true });

userSchema.index({ createdAt: -1 })
userSchema.index({ email: 1 })

export default mongoose.model("User", userSchema, "User");