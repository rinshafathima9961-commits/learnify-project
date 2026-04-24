import mongoose from "mongoose";

const liveSessionSchema = new mongoose.Schema(
  {
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["scheduled", "live", "ended"],
      default: "scheduled",
    },
    scheduledAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const LiveSession =
  mongoose.models.LiveSession || mongoose.model("LiveSession", liveSessionSchema);

export default LiveSession;
