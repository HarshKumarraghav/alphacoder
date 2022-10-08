import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/userContext";
const getLocalStorageData = () => {
  let tokenKey = localStorage.getItem("authData");
  return tokenKey;
};
// setting up the protected route
const ProtectedRoute = ({ children }) => {
  let [token] = useUserAuth();

  if (token === undefined) {
    token = getLocalStorageData();
  }
  if (token === undefined || token === "null") {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
