import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "./AuthProvider";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const { pathname } = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }

  if (user && user.email) {
    return children;
  }

  return <Navigate to={"/login"} state={pathname}></Navigate>;
};

export default PrivateRoute;
