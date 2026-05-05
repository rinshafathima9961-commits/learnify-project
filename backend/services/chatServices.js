import { messages } from "../models/message.js";

// send message
export const sendMessageService = async ({ sender, receiver, message }) => {
  const newMessage = await messages.create({
    sender,
    receiver,
    message,
  });

  return newMessage;
};

// get conversation
export const getMessagesService = async ({ userId, currentUserId }) => {
  const messages = await message.find({
    $or: [
      { sender: currentUserId, receiver: userId },
      { sender: userId, receiver: currentUserId },
    ],
  }).sort({ createdAt: 1 });

  return messages;
};

// mark as read
export const markAsReadService = async ({ currentUserId, userId }) => {
  await message.updateMany(
    { receiver: currentUserId, sender: userId },
    { read: true }
  );

  return true;
};