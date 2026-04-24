import Enrollment from "../models/Enrollment.js";
import User from "../models/User.js";

export const getUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const enrollCourse = async (req, res, next) => {
  try {
    const { courseId } = req.body;

    if (!courseId) {
      return res.status(400).json({ message: "courseId is required" });
    }

    const enrollment = await Enrollment.create({
      user: req.user.id,
      course: courseId,
    });

    res.status(201).json(enrollment);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ message: "Already enrolled in this course" });
    }

    next(error);
  }
};

export const getEnrolledCourses = async (req, res, next) => {
  try {
    const enrollments = await Enrollment.find({ user: req.user.id })
      .populate({
        path: "course",
        populate: { path: "instructor", select: "name email" },
      })
      .sort({ createdAt: -1 });

    res.json(enrollments);
  } catch (error) {
    next(error);
  }
};
