import React, { use } from "react";
import { NavLink } from "react-router";
import logo from "/logo.jpg";
import { AuthContext } from "../auth/AuthProvider";

const NavBar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("Logged out successfully");
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };
  return (
    <div className="flex justify-between items-center bg-white text-zinc-800 p-4">
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
          <NavLink
            className={({ isActive }) => (isActive ? "text-green-600" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-green-600" : "")}
            to={"/all-plants"}
          >
            All Plants
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            className={({ isActive }) => (isActive ? "text-green-600" : "")}
            to="/my-plants"
          >
            My Plants
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            className={({ isActive }) => (isActive ? "text-green-600" : "")}
            to="/add-plant"
          >
            Add Plant
          </NavLink>
        </li>
      </ul>

      {user ? (
        <div className="relative group inline-block text-left">
          <img
            src={user?.photoURL}
            alt={user?.displayName}
            className="w-10 h-10 rounded-full cursor-pointer border border-gray-300"
          />

          {/* Hover box */}
          <div className="absolute right-0 hidden group-hover:flex flex-col items-center justify-center bg-white border shadow-lg z-10 rounded-md w-40 py-5">
            <span className="font-semibold text-zinc-900">
              {user?.displayName || "User"}
            </span>
            <button
              onClick={handleLogout}
              className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
            >
              Log Out
            </button>
          </div>
        </div>
      ) : (
        <div className="flex gap-5 text-sm">
          <NavLink
            className="px-5 py-1 bg-green-500 text-white rounded-full hover:bg-green-600"
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            className="px-5 py-1 bg-green-500 text-white rounded-full hover:bg-green-600"
            to="/register"
          >
            Register
          </NavLink>
        </div>
      )}
      {/* User Profile */}
    </div>
  );
};

export default NavBar;
