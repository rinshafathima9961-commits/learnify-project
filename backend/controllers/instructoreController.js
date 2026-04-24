import Course from "../models/Course.js";

export const getInstructorCourses = async (req, res, next) => {
  try {
    const courses = await Course.find({ instructor: req.user.id }).sort({
      createdAt: -1,
    });

    res.json(courses);
  } catch (error) {
    next(error);
  }
};

export const publishCourse = async (req, res, next) => {
  try {
    const course = await Course.findOneAndUpdate(
      { _id: req.params.id, instructor: req.user.id },
      { isPublished: true },
      { new: true }
    );

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json(course);
  } catch (error) {
    next(error);
  }
};
