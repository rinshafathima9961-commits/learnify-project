import express from "express";
import {
  sendMessage,
  getMessages,
  markAsRead,
} from "../controllers/chatController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, sendMessage);
router.get("/:userId", authMiddleware, getMessages);
router.put("/read/:userId", authMiddleware, markAsRead);

export default router;
