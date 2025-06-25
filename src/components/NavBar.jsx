import React, { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import logo from "/logo.jpg";
import { AuthContext } from "../auth/AuthProvider";
import { IoSunnySharp } from "react-icons/io5";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  FaHome,
  FaLeaf,
  FaUser,
  FaInfoCircle,
  FaPhoneAlt,
  FaLifeRing,
  FaTachometerAlt,
} from "react-icons/fa";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { format } from "date-fns";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const NavBar = () => {
  const today = format(new Date(), "PP");
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully", {
          position: "top-center",
          autoClose: 3000,
          theme: "colored",
          transition: Bounce,
        });
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 3000,
          theme: "colored",
          transition: Bounce,
        });
      });
  };

  const navLinks = [
    { path: "/", name: "Home", icon: <FaHome /> },
    { path: "/all-plants", name: "All Plants", icon: <FaLeaf /> },
    { path: "/about", name: "About Us", icon: <FaInfoCircle /> },
    { path: "/contact", name: "Contact", icon: <FaPhoneAlt /> },
    { path: "/support", name: "Support", icon: <FaLifeRing /> },
    ...(user
      ? [{ path: "/dashboard", name: "Dashboard", icon: <FaTachometerAlt /> }]
      : []),
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-green-100/95 dark:bg-green-950/95 backdrop-blur-sm shadow-md"
            : "bg-green-100 dark:bg-green-950"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div
              onClick={() => navigate("/")}
              className="flex items-center gap-3 cursor-pointer"
            >
              <img
                src={logo}
                alt="Green Nest Logo"
                className="w-10 h-10 rounded-full border-2 border-green-500 dark:border-green-400"
              />
              <div className="hidden sm:flex flex-col">
                <h3 className="text-lg font-bold text-green-600 dark:text-green-400">
                  Green Nest
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Care Your Plants
                </p>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "text-green-700 dark:text-green-300 bg-green-200/60 dark:bg-green-800/50"
                        : "text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-800"
                    }`
                  }
                >
                  {link.icon}
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              <span className="hidden sm:block text-xs text-gray-500 dark:text-gray-400">
                {today}
              </span>

              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors ${
                  theme === "dark"
                    ? "bg-gray-700 text-yellow-300 hover:bg-gray-600"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {theme === "dark" ? <BsFillMoonStarsFill /> : <IoSunnySharp />}
              </button>

              {!user ? (
                <div className="hidden sm:flex gap-2">
                  <NavLink
                    to="/login"
                    className="px-3 py-1.5 rounded-md bg-green-600 text-white hover:bg-green-700 text-sm"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="px-3 py-1.5 rounded-md border border-green-600 text-green-600 hover:bg-green-50 text-sm"
                  >
                    Register
                  </NavLink>
                </div>
              ) : (
                <div className="relative group">
                  <button
                    onClick={() => navigate("/profile")}
                    className="flex items-center gap-2"
                  >
                    <img
                      src={
                        user?.photoURL ||
                        "https://i.ibb.co/4Y8x5y0/default-user.png"
                      }
                      alt="User"
                      className="w-8 h-8 rounded-full border-2 border-green-500 object-cover"
                    />
                    <span className="hidden md:inline text-sm text-gray-800 dark:text-gray-300">
                      {user.displayName || "User"}
                    </span>
                  </button>
                  <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black/10 dark:ring-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <button
                      onClick={handleLogout}
                      className="block w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 text-left"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              )}

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
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

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 px-4 pt-3 pb-6 space-y-2 border-t border-gray-200 dark:border-gray-700">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-md text-base font-medium ${
                    isActive
                      ? "text-green-700 dark:text-green-300 bg-green-200/50 dark:bg-green-800/60"
                      : "text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-800"
                  }`
                }
              >
                {link.icon}
                {link.name}
              </NavLink>
            ))}

            {!user && (
              <div className="flex flex-col gap-2 pt-4">
                <NavLink
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-center px-4 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50"
                >
                  Register
                </NavLink>
              </div>
            )}
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="pt-16" />
      <ToastContainer />
    </>
  );
};

export default NavBar;
