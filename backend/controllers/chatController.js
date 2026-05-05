import { asyncHandler } from "../middleware/trycatchmiddleware.js";
import { getMessagesService, markAsReadService, sendMessageService } from "../services/chatServices.js";


// ✅ Send message
export const sendMessage = async (req, res, next) => {
  
    const { receiver, message } = req.body;

    const newMessage = await sendMessageService({
      sender: req.user.id,
      receiver,
      message,
    });

    res.status(201).json(newMessage);
  next()
};

// ✅ Get conversation
export const getMessages = async (req, res, next) => {
  
    const messages = await getMessagesService({
      userId: req.params.userId,
      currentUserId: req.user.id,
    });

    res.json(messages); // 🔥 FIX: you missed this
   next()
};

// ✅ Mark messages as read
export const markAsRead = async (req, res, next) => {
  
    await markAsReadService({
      currentUserId: req.user.id,
      userId: req.params.userId,
    });

    res.json({ message: "Messages marked as read" });
    next()
};

