import express from "express";
import {
  createLiveSession,
  getLiveSessions,
  startLiveSession,
  endLiveSession,
} from "../controllers/liveController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  roleMiddleware("instructor"),
  createLiveSession
);
router.get("/course/:courseId", authMiddleware, getLiveSessions);
router.put(
  "/:id/start",
  authMiddleware,
  roleMiddleware("instructor"),
  startLiveSession
);
router.put(
  "/:id/end",
  authMiddleware,
  roleMiddleware("instructor"),
  endLiveSession
);

export default router;
