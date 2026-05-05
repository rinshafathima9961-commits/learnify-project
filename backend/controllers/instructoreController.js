import { asyncHandler } from "../middleware/trycatchmiddleware.js";
import { getInstructorCoursesService, publishCourseService } from "../services/instructoreServices.js";


// ✅ Get instructor courses
export const getInstructorCourses = async (req, res, next) => {
  
    const courses = await getInstructorCoursesService(req.user.id);
    res.json(courses);
  next()
};

// ✅ Publish course
export const publishCourse = async (req, res, next) => {
  
    await publishCourseService({
      courseId: req.params.id,
      userId: req.user.id,
    });

    res.json({ message: "Course published" });
 
  next()
};