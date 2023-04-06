import { Navigate, Outlet } from "react-router-dom";

// use useAuth function for if token exist for not
export const useAuth = () => {
  const userdata = localStorage.getItem("login");

  
  const user = userdata ? { loggedIn: true } : { loggedIn: false };
  return user.loggedIn;
};

// protected routecheck for the reroute to login
export const ProtectedRouteCheck = ({ children }: any) => {
  const isAuth = useAuth();
  return isAuth ? <Navigate to="/dashboard" /> : children;
};

// protected Route for redirect to the protected routes
const ProtectedRoute = () => {

  const isAuth = localStorage.getItem("auth");

  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
