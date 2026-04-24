import express from "express";
import {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} from "../controllers/courseController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/", getCourses);
router.get("/:id", getCourseById);
router.post("/", authMiddleware, roleMiddleware("instructor"), createCourse);
router.put("/:id", authMiddleware, roleMiddleware("instructor"), updateCourse);
router.delete("/:id", authMiddleware, roleMiddleware("instructor"), deleteCourse);

export default router;
