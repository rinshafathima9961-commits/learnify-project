import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: String,

    price: {
      type: Number,
      default: 0,
    },
    category:{
        type:String,
    },

    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    thumbnail: String,

    lessons: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lesson",
      },
    ],

    studentsEnrolled: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const Course= mongoose.model("Course", courseSchema);


