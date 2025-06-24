import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router";
import logo from "/logo.jpg";
import { AuthContext } from "../auth/AuthProvider";
import { IoSunnySharp } from "react-icons/io5";
import { BsFillMoonStarsFill, BsPlusCircle } from "react-icons/bs";
import { FaHome, FaLeaf, FaUser } from "react-icons/fa";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { format } from "date-fns";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const NavBar = () => {
  const today = format(new Date(), "PP");
  const navigate = useNavigate();
  const { user, logOut } = React.useContext(AuthContext);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      })
      .catch((error) => {
        toast.error(`Error logging out: ${error?.message}`, {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      });
  };

  const navLinks = [
    {
      path: "/",
      name: "Home",
      icon: <FaHome className="text-lg" />,
      tooltip: "Go back to the homepage",
    },
    {
      path: "/all-plants",
      name: "All Plants",
      icon: <FaLeaf className="text-lg" />,
      tooltip: "View all plants",
    },
    {
      path: "/my-plants",
      name: "My Plants",
      icon: <FaUser className="text-lg" />,
      tooltip: "View and manage your added plants",
    },
    {
      path: "/add-plant",
      name: "Add Plant",
      icon: <BsPlusCircle className="text-lg" />,
      tooltip: "Add a new plant to your care list",
    },
  ];

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 dark:text-white text-gray-800 shadow-sm dark:shadow-gray-800/50">
        <div className=" px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo and brand */}
            <div
              onClick={() => navigate("/")}
              className="flex gap-3 items-center cursor-pointer"
            >
              <img
                src={logo}
                alt="Green Nest Logo"
                className="w-12 h-12 rounded-full border-2 border-green-500 dark:border-green-600"
              />
              <div className="hidden sm:flex flex-col">
                <h3 className="text-xl font-bold text-green-600 dark:text-green-400 pacifico">
                  Green Nest
                </h3>
                <p className="text-xs font-light text-gray-500 dark:text-gray-400">
                  Care Your Plants
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <ul className="flex space-x-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <NavLink
                      id={`tooltip-${link.name
                        .toLowerCase()
                        .replace(" ", "-")}`}
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          isActive
                            ? "text-green-600 dark:text-green-400 bg-green-50 dark:bg-gray-800"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`
                      }
                      to={link.path}
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </NavLink>
                    <Tooltip
                      anchorSelect={`#tooltip-${link.name
                        .toLowerCase()
                        .replace(" ", "-")}`}
                      place="bottom"
                    >
                      {link.tooltip}
                    </Tooltip>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side controls */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-4">
                <p className="text-xs font-light text-gray-500 dark:text-gray-400">
                  {today}
                </p>

                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-full transition-colors ${
                    theme === "dark"
                      ? "bg-gray-700 text-yellow-300 hover:bg-gray-600"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <BsFillMoonStarsFill />
                  ) : (
                    <IoSunnySharp />
                  )}
                </button>
              </div>

              {!user ? (
                <div className="hidden sm:flex gap-2">
                  <NavLink
                    className="px-4 py-2 text-sm font-medium rounded-md bg-green-500 text-white hover:bg-green-600 transition-colors"
                    to="/login"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    className="px-4 py-2 text-sm font-medium rounded-md bg-white dark:bg-gray-800 border border-green-500 text-green-500 hover:bg-green-50 dark:hover:bg-gray-700 transition-colors"
                    to="/register"
                  >
                    Register
                  </NavLink>
                </div>
              ) : (
                <div className="relative group">
                  <button
                    onClick={() => navigate("/profile")}
                    className="flex items-center gap-2 focus:outline-none"
                  >
                    <img
                      src={user?.photoURL}
                      alt={user?.displayName}
                      className="w-10 h-10 rounded-full border-2 border-green-500 dark:border-green-600"
                    />
                    <span className="hidden md:inline text-sm font-medium text-gray-700 dark:text-gray-300">
                      {user?.displayName || "User"}
                    </span>
                  </button>

                  <div className="absolute right-0 mt-2 w-48 origin-top-right bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-50">
                    <div className="py-1">
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? "text-green-600 dark:text-green-400 bg-green-50 dark:bg-gray-800"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.icon}
                  {link.name}
                </NavLink>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
              {user ? (
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img
                      src={user?.photoURL}
                      alt={user?.displayName}
                      className="h-10 w-10 rounded-full border-2 border-green-500 dark:border-green-600"
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800 dark:text-white">
                      {user?.displayName || "User"}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex gap-2 px-2">
                  <NavLink
                    to="/login"
                    className="w-full px-4 py-2 text-center text-sm font-medium rounded-md bg-green-500 text-white hover:bg-green-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="w-full px-4 py-2 text-center text-sm font-medium rounded-md bg-white dark:bg-gray-800 border border-green-500 text-green-500 hover:bg-green-50 dark:hover:bg-gray-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
      <ToastContainer />
    </>
  );
};

export default NavBar;
