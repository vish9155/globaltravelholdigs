import client from "../config/redisConfig.js";

// Generate OTP
export const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

// Key builder
const getKey = (type, value) => {
    return `otp:${type}:${value}`;
};

// Save OTP (FIXED)
export const saveOtp = async (type, value, otp) => {
    await client.setEx(
        getKey(type, value),
        300, // 5 minutes
        otp
    );
};

// Get OTP
export const getOtp = async (type, value) => {
    return await client.get(getKey(type, value));
};

// Delete OTP
export const deleteOtp = async (type, value) => {
    await client.del(getKey(type, value));
};