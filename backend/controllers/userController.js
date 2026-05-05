import { enrollCourseService, getEnrolledCoursesService, getUserProfileService } from "../services/userServices.js";

// ✅ Profile
export const getUserProfile = async (req, res, next) => {
  
    const user = await getUserProfileService(req.user.id);
    res.json(user);
  next()
};

// ✅ Enroll
export const enrollCourse = async (req, res, next) => {
  
    const enrollment = await enrollCourseService({
      userId: req.user.id,
      courseId: req.body.courseId,
    });

    res.status(201).json(enrollment);
  next()
};

// ✅ Enrolled courses
export const getEnrolledCourses = async (req, res, next) => {
  
    const enrollments = await getEnrolledCoursesService(req.user.id);
    res.json(enrollments);
  next()
};