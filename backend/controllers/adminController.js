import { deleteCourseAdminService, deleteUserService, getAllCoursesAdminService, getAllUsersService } from "../services/adminServices.js";

// ✅ Get all users
export const getAllUsers = async (req, res, next) => {

    const users = await getAllUsersService();
     next();
    res.json(users);

}
// ✅ Delete user
export const deleteUser = async (req, res, next) => {
 
    await deleteUserService(req.params.id);
      next();
    res.json({ message: "User deleted" });

};

// ✅ Get all courses
 export const getAllCoursesAdmin = async (req, res, next) => {
  
    const courses = await getAllCoursesAdminService();
     next()
    res.json(courses);

};

// Delete course
export const deleteCourseAdmin = async (req, res, next) => {
 
    await deleteCourseAdminService(req.params.id);
     next()
    res.json({ message: "Course deleted by admin" });
 
  }

