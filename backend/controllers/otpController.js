import { requestOtpService, verifyOtpService } from "../services/authServices.js";

export const otpController = async (req, res) => {
    const { email } = req.body;
    console.log(`[OTP] Requesting OTP for: ${email}`);

    try {
        const response = await requestOtpService(email);
        console.log(`[OTP] OTP sent successfully to: ${email}`);
        res.status(200).json(response);
    } catch (error) {
        console.error(`[OTP] Error sending OTP to ${email}:`, error);
        const statusCode = error.statusCode || (error.message === "User already registered" ? 409 : 400);
        res.status(statusCode).json({ message: error.message });
    }
}

export const otpverifyController = async (req, res) => {
    const { otp, email } = req.body;
    
    if (!otp || !email) {
        return res.status(400).json({ message: "OTP and email are required" });
    }

    console.log(`[OTP] Attempting verification for: ${email}`);

    try {
        const verifyResponse = await verifyOtpService({ otp: String(otp), email });
        console.log(`[OTP] Verification successful for: ${email}`);
        res.status(200).json(verifyResponse);
    } catch (error) {
        console.error(`[OTP] Verification failed for ${email}:`, error.message);
        // Determine status code based on error message
        let statusCode = 400;
        if (error.message.includes("not found")) statusCode = 404;
        
        res.status(statusCode).json({ message: error.message });
    }
}
