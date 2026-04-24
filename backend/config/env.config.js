import dotenv from "dotenv";

dotenv.config();

export const env = {
  MONGO_URL: process.env.MONGO_URL || "mongodb://127.0.0.1:27017/learnify",
  JWT_SECRET: process.env.JWT_SECRET || "learnify-dev-secret",
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "7d",
};
