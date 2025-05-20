import React from "react";
import { NavLink } from "react-router";
import logo from "/logo.jpg";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-800 text-white p-4">
      <div className="flex gap-2 items-center">
        <figure>
          <img src={logo} alt="" className="w-12 h-12 rounded-full" />
        </figure>
        <div className="flex flex-col">
          <h3 className="text-xl ">Green Nest</h3>
          <p className="text-sm font-thin">Care Your Plants</p>
        </div>
      </div>
      <ul className="flex gap-5 items-center text-lg font-light">
        <li>
          {" "}
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to={"/all-plants"}>All Plants</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/my-plants">My Plants</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/add-plant">Add Plant</NavLink>
        </li>
      </ul>

      <div className="flex gap-2 items-center text-lg">
        <NavLink
          className=" bg-green-600 px-6 py-1 rounded-4xl flex items-center"
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          className=" bg-green-600 px-6 py-1 rounded-4xl flex items-center"
          to="/register"
        >
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
