import express from "express";
import {
  getUserProfile,
  enrollCourse,
  getEnrolledCourses,
} from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/profile", authMiddleware, getUserProfile);
router.post("/enroll", authMiddleware, enrollCourse);
router.get("/enrollments", authMiddleware, getEnrolledCourses);

export default router;
