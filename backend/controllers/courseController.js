import { asyncHandler } from "../middleware/trycatchmiddleware.js";
import { createCourseService, deleteCourseService, getCourseByIdService, getCoursesService, updateCourseService } from "../services/courseServices.js";


// ✅ Create Course
export const createCourse = async (req, res, next) => {
  
    const course = await createCourseService({
      ...req.body,
      instructor: req.user.id,
      
    });

    res.status(201).json(course);
  next()
};

// ✅ Get all courses
export const getCourses = async (req, res, next) => {
  
    const courses = await getCoursesService();
    res.json(courses);
  
  next()
};

// ✅ Get single course
export const getCourseById = async (req, res, next) => {
 
    const course = await getCourseByIdService(req.params.id);
    res.json(course);
  next()
};

// ✅ Update course
export const updateCourse = async (req, res, next) => {
  
    const updated = await updateCourseService({
      courseId: req.params.id,
      userId: req.user.id,
      updates: req.body,
    });

    res.json(updated);
 next()
};

// ✅ Delete course
export const deleteCourse = async (req, res, next) => {
 
    await deleteCourseService(req.params.id);
    res.json({ message: "Course deleted" });
 next()
};