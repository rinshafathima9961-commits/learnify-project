import express from "express";
import {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} from "../controllers/courseController.js";



const router = express.Router();

// create course
router.post("/", createCourse);

// get all courses
router.get("/", getCourses);

// get single course
router.get("/:id", getCourseById);

// update course
router.put("/:id", updateCourse);

// delete course
router.delete("/:id", deleteCourse);

export default router;