
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Student/auth/StudentLogin";
import Register from "./pages/Student/auth/StudentRegister";
import ProtectedRoute from "./components/common/ProtectedRoute";
// import VerifyOtp from "./pages/Student/Auth/VerifyOtp";

import InstructorLogin from "./pages/instructore/auth/InstructoreLogin";
import InstructorRegister from "./pages/instructore/auth/InstructorRegister";
import AdminLogin from "./pages/admin/auth/AdminLogin";
import LandingPage from "./pages/Home/LandingPage";

// Student Dashboard Imports
import DashboardLayout from "./components/student/DashboardLayout";
import StudentDashboard from "./pages/Student/StudentDashboard";
import StudentCourses from "./pages/Student/StudentCourses";
import BuyCourses from "./pages/Student/BuyCourses";
import LiveClasses from "./pages/Student/LiveClasses";
import InstructorMessages from "./pages/Student/StudentMessage";
import Exams from "./pages/Student/Exams";
import Certificates from "./pages/Student/Certificates";
import StudentProfile from "./pages/Student/StudentProfile";
import CourseDetails from "./pages/Student/CourseDetails";
import CoursePlayer from "./pages/Student/CoursePlayer";
import LiveRoom from "./pages/Student/LiveRoom";

// Instructor Dashboard Imports
import InstructorLayout from "./components/instructore/InstructorLayout";
import InstructorDashboard from "./pages/instructore/InstructorDashboard";
import InstructorProfile from "./pages/instructore/InstructorProfile";
import MyCourses from "./pages/instructore/MyCourses";
import CreateCourse from "./pages/instructore/CreateCourse";
import StudentsList from "./pages/instructore/StudentsList";
import StudentDetails from "./pages/instructore/StudentDetails";
import InstructorReviews from "./pages/instructore/InstructorReviews";
import InstructorLiveClasses from "./pages/instructore/InstructorLiveClasses";
import InstructorAttendance from "./pages/instructore/InstructorAttendance";
import InstructorOffers from "./pages/instructore/InstructorOffers";
import InstructorPayments from "./pages/instructore/InstructorPayments";
import InstructorEarnings from "./pages/instructore/InstructorEarnings";
import StudentMessage from "./pages/Student/StudentMessage";

// Admin Dashboard Imports
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminStudents from "./pages/admin/AdminStudents";
import AdminInstructors from "./pages/admin/AdminInstructors";
import AdminCourseApproval from "./pages/admin/AdminCourseApproval";
import AdminCategories from "./pages/admin/AdminCategories";
import AdminOffers from "./pages/admin/AdminOffers";
import AdminLiveClasses from "./pages/admin/AdminLiveClasses";
import AdminInstructorAvailability from "./pages/admin/AdminInstructorAvailability";
import AdminPayments from "./pages/admin/AdminPayments";
import AdminEarnings from "./pages/admin/AdminEarnings";
import AdminUserBlocks from "./pages/admin/AdminUserBlocks";
import AdminReports from "./pages/admin/AdminReports";
import AdminProfile from "./pages/admin/AdminProfile";

function App() {
  return (
    <Routes>
      {/* Redirect */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Navigate to="/student/dashboard" replace />} />

      {/* Public Routes (Student) */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Public Routes (Instructor) */}
      <Route path="/instructor/login" element={<InstructorLogin />} />
      <Route path="/instructor/register" element={<InstructorRegister />} />

      {/* Public Routes (Admin) */}
      <Route path="/admin/login" element={<AdminLogin />} />


      {/* Student Dashboard Routes */}
      <Route
        path="/student"
        element={
          <ProtectedRoute allowedRoles={["student"]} loginPath="/login">
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<StudentDashboard />} />
        <Route path="courses" element={<StudentCourses />} />
        <Route path="buy-courses" element={<BuyCourses />} />
        <Route path="live-classes" element={<LiveClasses />} />
        <Route path="live-chat" element={<LiveRoom />} />
        <Route path="messages" element={<StudentMessage />} />
        <Route path="exams" element={<Exams />} />
        <Route path="certificates" element={<Certificates />} />
        <Route path="profile" element={<StudentProfile />} />
        <Route path="course-details" element={<CourseDetails />} />
        <Route path="course-player" element={<CoursePlayer />} />
      </Route>

      {/* Instructor Dashboard Routes */}
      <Route
        path="/instructor"
        element={
          <ProtectedRoute allowedRoles={["instructor", "admin"]} loginPath="/instructor/login">
            <InstructorLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<InstructorDashboard />} />
        <Route path="profile" element={<InstructorProfile />} />
        <Route path="courses" element={<MyCourses />} />
        <Route path="add-course" element={<CreateCourse />} />
        <Route path="students" element={<StudentsList />} />
        <Route path="student-details" element={<StudentDetails />} />
        <Route path="reviews" element={<InstructorReviews />} />
        <Route path="live-classes" element={<InstructorLiveClasses />} />
        <Route path="messages" element={<InstructorMessages />} />
        <Route path="attendance" element={<InstructorAttendance />} />
        <Route path="offers" element={<InstructorOffers />} />
        <Route path="payments" element={<InstructorPayments />} />
        <Route path="earnings" element={<InstructorEarnings />} />
      </Route>

      {/* Admin Dashboard Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["admin"]} loginPath="/admin/login">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="students" element={<AdminStudents />} />
        <Route path="instructors" element={<AdminInstructors />} />
        <Route path="course-approval" element={<AdminCourseApproval />} />
        <Route path="categories" element={<AdminCategories />} />
        <Route path="offers" element={<AdminOffers />} />
        <Route path="live-classes" element={<AdminLiveClasses />} />
        <Route path="availability" element={<AdminInstructorAvailability />} />
        <Route path="payments" element={<AdminPayments />} />
        <Route path="earnings" element={<AdminEarnings />} />
        <Route path="user-blocks" element={<AdminUserBlocks />} />
        <Route path="reports" element={<AdminReports />} />
        <Route path="profile" element={<AdminProfile />} />
      </Route>
    </Routes>
  );
}

export default App;
