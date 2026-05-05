import express from "express";
import {
  getUserProfile,
  enrollCourse,
  getEnrolledCourses,
} from "../controllers/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";



const router = express.Router();

// profile
router.get("/profile", authMiddleware, getUserProfile);

// enroll
router.post("/enroll", authMiddleware, enrollCourse);

// enrolled courses
router.get("/enrollments", authMiddleware, getEnrolledCourses);

export default router;