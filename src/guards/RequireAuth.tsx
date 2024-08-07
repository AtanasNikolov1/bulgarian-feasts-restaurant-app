import { Navigate, useLocation } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

const RequireAuth = ({ children }) => {
  // const { user } = useAuth();
  const userData = localStorage.get("userData");
  const location = useLocation();

  if (!userData) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default RequireAuth;
