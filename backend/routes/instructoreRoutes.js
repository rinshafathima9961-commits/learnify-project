import express from "express";


import roleMiddleware from "../middleware/roleMiddleware.js";
import { getInstructorCourses, publishCourse } from "../controllers/instructoreController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";


const router = express.Router();

// only instructor
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