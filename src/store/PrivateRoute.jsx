import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isActive = localStorage.getItem("isActive") === "true";
  return isActive ? children : <Navigate to="/" />;
};

export default PrivateRoute;
