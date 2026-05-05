import User from "../models/User.js";
import Enrollment from "../models/Enrollment.js";
import { Course } from "../models/Course.js";


// get profile
export const getUserProfileService = async (userId) => {
  const user = await User.findById(userId).select("-password");

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

// enroll
export const enrollCourseService = async ({ userId, courseId }) => {
  // check course exists
  const course = await Course.findById(courseId);
  if (!course) {
    throw new Error("Course not found");
  }

  // prevent duplicate enrollment
  const alreadyEnrolled = await Enrollment.findOne({
    user: userId,
    course: courseId,
  });

  if (alreadyEnrolled) {
    throw new Error("Already enrolled in this course");
  }

  const enrollment = await Enrollment.create({
    user: userId,
    course: courseId,
  });

  return enrollment;
};

// get enrolled courses
export const getEnrolledCoursesService = async (userId) => {
  return await Enrollment.find({ user: userId }).populate("course");
};