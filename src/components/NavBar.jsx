import React, { use, useState } from "react";
import { NavLink } from "react-router";
import logo from "/logo.jpg";
import { AuthContext } from "../auth/AuthProvider";
import { IoSunnySharp } from "react-icons/io5";
import { BsFillMoonStarsFill } from "react-icons/bs";

const NavBar = () => {
  const { user, logOut } = use(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  React.useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
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
    <div className="flex justify-between items-center bg-white dark:bg-zinc-800 dark:text-white text-zinc-800 p-4 poppins">
      <div className="flex gap-2 items-center">
        <figure>
          <img
            src={logo}
            alt=""
            className="sm:w-12 w-16 sm:h-12 rounded-full"
          />
        </figure>
        <div className="hidden sm:flex flex-col pacifico">
          <h3 className="text-xl ">Green Nest</h3>
          <p className="text-sm font-thin">Care Your Plants</p>
        </div>
      </div>
      <ul className="hidden sm:flex gap-5 items-center text-sm md:text-lg font-light">
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

      <div className="flex gap-5 items-center">
        <div>
          {theme === "dark" ? (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-800 text-white  hover:bg-gray-700"
            >
              <BsFillMoonStarsFill />
            </button>
          ) : (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 text-gray-800  hover:bg-gray-300"
            >
              <IoSunnySharp />
            </button>
          )}
        </div>
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
      </div>
      {/* User Profile */}
    </div>
  );
};

export default NavBar;
