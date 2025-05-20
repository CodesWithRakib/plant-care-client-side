import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const { pathname } = useLocation();

  if (user && user.email) {
    return children;
  }

  return <Navigate to={"/login"} state={pathname}></Navigate>;
};

export default PrivateRoute;
