import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ allowedRoles, children, loginPath = "/login" }) => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <Navigate to={loginPath} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // If the user's role is not allowed, redirect them to their respective dashboard
    if (user.role === "admin") return <Navigate to="/admin/dashboard" replace />;
    if (user.role === "instructor") return <Navigate to="/instructor/dashboard" replace />;
    return <Navigate to="/student/dashboard" replace />;
  }

  // Support both React Router v6 `<Outlet />` patterns and direct `children` wrapping
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
