import { Course } from "../models/Course.js";


// create
export const createCourseService = async ({ title, description, price, category, instructor }) => {
  const course = await Course.create({
    title,
    description,
    price,
    category,
    instructor,
  });

  return course;
};

// get all published
export const getCoursesService = async () => {
  return await Course.find({ status: "published" })
    .populate("instructor", "name email");
};

// get by id
export const getCourseByIdService = async (courseId) => {
  const course = await Course.findById(courseId)
    .populate("instructor", "name email")
    .populate("lessons");

  if (!course) {
    throw new Error("Course not found");
  }

  return course;
};

// update
export const updateCourseService = async ({ courseId, userId, updates }) => {
  const course = await Course.findById(courseId);

  if (!course) {
    throw new Error("Course not found");
  }

  // ownership check
  if (course.instructor.toString() !== userId) {
    const err = new Error("Not authorized");
    err.statusCode = 403;
    throw err;
  }

  Object.assign(course, updates);

  return await Course.save();
};

// delete
export const deleteCourseService = async (courseId) => {
  const course = await Course.findById(courseId);

  if (!course) {
    throw new Error("Course not found");
  }

  await Course.deleteOne();

  return true;
};