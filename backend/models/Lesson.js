import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema(
  {
    title: String,

    videoUrl: String,

    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },

    duration: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Lesson", lessonSchema);