import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import { AuthContext } from "../auth/AuthProvider";

const Root = () => {
  return (
    <div className="open-sans">
      <NavBar></NavBar>
      <div className=" bg-green-50 dark:bg-zinc-800">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
