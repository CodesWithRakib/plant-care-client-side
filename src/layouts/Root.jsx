import React, { use } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import { AuthContext } from "../auth/AuthProvider";

const Root = () => {
  const { user } = use(AuthContext);
  console.log(user);
  return (
    <div>
      <NavBar></NavBar>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
