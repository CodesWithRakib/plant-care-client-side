import React, { use } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import { AuthContext } from "../auth/AuthProvider";

const Root = () => {
  const { user } = use(AuthContext);
  console.log(user);
  return (
    <div className="open-sans">
      <NavBar></NavBar>
      <div className="max-w-screen-2xl mx-auto bg-green-50 dark:bg-zinc-800">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
