import express from "express";
import {
  getInstructorCourses,
  publishCourse,
} from "../controllers/instructoreController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get(
  "/courses",
  authMiddleware,
  roleMiddleware("instructor"),
  getInstructorCourses
);
router.put(
  "/courses/:id/publish",
  authMiddleware,
  roleMiddleware("instructor"),
  publishCourse
);

export default router;
