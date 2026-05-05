import nodemailer from "nodemailer";

const createTransporter = () => {
  const emailUser = process.env.EMAIL_USER?.trim();
  const emailPass = process.env.EMAIL_PASS?.trim();

  if (!emailUser || !emailPass) {
    throw new Error("Email credentials are not configured");
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });
};

export const sendEmail = async (to, subject, html) => {
  try {
    const emailUser = process.env.EMAIL_USER?.trim();
    const transporter = createTransporter();

    await transporter.sendMail({
    from: `"Learnify" <${emailUser}>`,
    to,
    subject,
    html, // use html instead of text
});
  return true
  } catch (error) {
     console.log("otp sending error ",error);
    throw new Error(error.message || "OTP sending failed")
   
    
  }
  
};

export const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};




export const getOtpExpiry = () => {
  return new Date(Date.now() + 5 * 60 * 1000);
};

export const isOtpExpiry = () => {
  return new Date(Date.now() + 5 * 60 * 1000);
}
