import User from "../models/User.js";

import { getAllUsers,deleteUser,getAllCoursesAdmin, deleteCourseAdmin} from "../controllers/adminController.js";
import { Course } from "../models/Course.js";

// get all users
export const getAllUsersService = async () => {
  return await User.find().select("-password");
};

// delete user
export const deleteUserService = async (userId) => {
  const user = await User.findById(userId);

  if (!user) {
    throw new Error("User not found");
  }

  await user.deleteOne();

  return true;
};

// get all courses
export const getAllCoursesAdminService = async () => {
  return await Course.find().populate("instructor", "name");
};

// delete course
export const deleteCourseAdminService = async (courseId) => {
  const course = await Course.findById(courseId);

  if (!course) {
    throw new Error("Course not found");
  }

  await course.deleteOne();

  return true;
};
// resend OTP
export const resendOtpService = async (email) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

  // ✅ PUT IT HERE
  if (user.isVerified) {
    throw new Error("User already verified");
  }

  const otp = generateOTP();

  user.otp = otp;
  user.otpExpiry = getOtpExpiry();

  await user.save();

  await sendEmail(email, "New OTP", `Your OTP is ${otp}`);
};
// verify OTP
export const verifyOtpService = async ({ email, otp }) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

  // ✅ PUT IT HERE ALSO
  if (user.isVerified) {
    throw new Error("User already verified");
  }

  if (user.otp !== otp) {
    throw new Error("Invalid OTP");
  }

  if (user.otpExpiry < new Date()) {
    throw new Error("OTP expired");
  }

  user.isVerified = true;
  user.otp = null;
  user.otpExpiry = null;

  await user.save();

  return user;
};