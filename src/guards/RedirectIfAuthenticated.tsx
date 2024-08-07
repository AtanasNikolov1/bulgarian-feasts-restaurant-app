import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

const RedirectIfAuthenticated = ({ children }) => {
  // const { user } = useAuth();
  const userData = localStorage.getItem("userData");

  if (userData) {
    return <Navigate to="/" />;
  }

  return children;
};

export default RedirectIfAuthenticated;
