
import { generateOTP, sendEmail } from "../utils/sendEmail.js";
import { Otp } from "../models/Otp.js"
import User from "../models/User.js";

const createError = (message, statusCode = 400) => {
    const error = new Error(message);
    error.statusCode = statusCode;
    return error;
}

export  const otpServiser = async (email)=>{
    try {
        if (!email) {
          throw createError("Email is required");
        }

        const user = await User.findOne({email})
        if(user){
            
          throw createError("User already exists")
          
        }else{
            const otp = generateOTP()
            console.log("this is otp",otp);
           await Otp.findOneAndDelete({email})
            const response = await Otp.create({
                email,
                otp,
            })
            const emailResponse = await sendEmail(email,"this is your one time otp for Learnify",`Your OTP is ${otp}`)
            return "email sended succussfully"
        }

    } catch (error) {
        throw error
    }
    
}

export const otpVerifyService = async (sndOtp, email) => {
  try {
    if (!email || !sndOtp) {
      throw createError("Email and OTP are required");
    }

    const strOtp = await Otp.findOne({ email });
    console.log(sndOtp);
    
    if (!strOtp) {

      throw createError("OTP not found", 404);
    }

    if (strOtp.otp !== String(sndOtp)) {
      throw createError("Invalid OTP");
    }

    // 3 minute expiry check
    const currentTime = Date.now();
    const timeDifference = currentTime - strOtp.expirydate.getTime();

    if (timeDifference > 3 * 60 * 1000) {
      await Otp.findOneAndDelete({email});
      throw createError("OTP expired");
    }

    strOtp.isVerified = true;
    await strOtp.save();
    
    return { success: true };

  } catch (error) {
    throw error;
  }








