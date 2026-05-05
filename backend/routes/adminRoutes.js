import express from "express"
import {
  getAllUsers,
  deleteUser,
  getAllCoursesAdmin,
  deleteCourseAdmin,
} from "../controllers/adminController.js";


import roleMiddleware from "../middleware/roleMiddleware.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get(
  "/users",
  authMiddleware,
  roleMiddleware("admin"),
  getAllUsers
);

router.delete(
  "/users/:id",
  authMiddleware,
  roleMiddleware("admin"),
  deleteUser
);

router.get(
  "/courses",
  authMiddleware,
  roleMiddleware("admin"),
  getAllCoursesAdmin
);

router.delete(
  "/courses/:id",
  authMiddleware,
  roleMiddleware("admin"),
  deleteCourseAdmin
);

export default router;