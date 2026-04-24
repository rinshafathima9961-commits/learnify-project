import User from "../models/User.js";
import Course from "../models/Course.js";

// ✅ Get all users
export const getAllUsers = async (req,res,next) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
  
    next(err);
  }
};

// ✅ Delete user
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    await user.deleteOne();

    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get all courses (including drafts)
export const getAllCoursesAdmin = async (req, res) => {
  try {
    const courses = await Course.find().populate("instructor", "name");
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Delete course
export const deleteCourseAdmin = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) return res.status(404).json({ message: "Course not found" });

    await course.deleteOne();

    res.json({ message: "Course deleted by admin" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};






