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

const NavBar = () => {
  const today = format(new Date(), "PP");
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // State for full page height overlay
  const [overlayHeight, setOverlayHeight] = useState(window.innerHeight);

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

  // Update overlay height to cover entire scrollable page on load, resize, and scroll
  useEffect(() => {
    const updateHeight = () => {
      const fullHeight = Math.max(
        document.documentElement.scrollHeight,
        window.innerHeight
      );
      setOverlayHeight(fullHeight);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    window.addEventListener("scroll", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("scroll", updateHeight);
    };
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
      ? [
          { path: "/dashboard", name: "Dashboard", icon: <FaTachometerAlt /> },
          { path: "/profile", name: "Profile", icon: <FaUser /> },
        ]
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
        role="navigation"
        aria-label="Primary Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div
              onClick={() => navigate("/")}
              className="flex items-center gap-2 cursor-pointer select-none"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") navigate("/");
              }}
              aria-label="Go to homepage"
            >
              <img
                src={logo}
                alt="Green Nest Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-green-500 dark:border-green-400"
              />
              <div className="hidden xl:flex flex-col leading-tight">
                <h3 className="text-lg font-bold text-green-600 dark:text-green-400 leading-snug">
                  Green Nest
                </h3>
                <p className="text-sm hidden xl:block text-gray-500 dark:text-gray-400 leading-snug">
                  Care Your Plants
                </p>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "text-green-700 dark:text-green-300 bg-green-200/60 dark:bg-green-800/50"
                        : "text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-800"
                    }`
                  }
                  aria-current={({ isActive }) =>
                    isActive ? "page" : undefined
                  }
                >
                  {link.icon}
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Right-aligned controls */}
            <div className="flex items-center gap-2 sm:gap-4">
              <span className="hidden sm:block text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                {today}
              </span>

              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  theme === "dark"
                    ? "bg-gray-700 text-yellow-300 hover:bg-gray-600"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                aria-label={`Switch to ${
                  theme === "dark" ? "light" : "dark"
                } mode`}
              >
                {theme === "dark" ? <BsFillMoonStarsFill /> : <IoSunnySharp />}
              </button>

              {!user ? (
                <div className="hidden sm:flex gap-2">
                  <NavLink
                    to="/login"
                    className="px-3 py-1 rounded-md bg-green-600 text-white hover:bg-green-700 text-sm"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="px-3 py-1 rounded-md border border-green-600 text-green-600 hover:bg-green-50 text-sm"
                  >
                    Register
                  </NavLink>
                </div>
              ) : (
                <div className="relative group">
                  <button
                    onClick={() => navigate("/profile")}
                    className="flex items-center gap-1 sm:gap-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    aria-haspopup="true"
                    aria-expanded="false"
                    aria-label="User menu"
                  >
                    <img
                      src={
                        user?.photoURL ||
                        "https://i.ibb.co/4Y8x5y0/default-user.png"
                      }
                      alt="User"
                      className="w-8 h-8 rounded-full border-2 border-green-500 object-cover"
                    />
                    <span className="hidden md:inline text-sm text-gray-800 dark:text-gray-300 truncate max-w-[120px]">
                      {user.displayName || "User"}
                    </span>
                  </button>
                  <div
                    className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black/10 dark:ring-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                    role="menu"
                  >
                    <button
                      onClick={handleLogout}
                      className="block w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 text-left"
                      role="menuitem"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              )}

              {/* Mobile Toggle - Right-aligned */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
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
      </nav>

      {/* Mobile Menu Backdrop and Sliding Panel */}
      <div
        style={{ height: overlayHeight }}
        className={`lg:hidden fixed top-0 left-0 w-full z-[9999] bg-black/50 backdrop-blur-md transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      >
        <div
          className="absolute top-0 right-0 w-3/4 max-w-xs max-h-[100vh] overflow-y-auto bg-white dark:bg-gray-900 shadow-lg p-4 flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="Logo"
                className="w-8 h-8 rounded-full border-2 border-green-500"
              />
              <span className="font-bold text-green-600 dark:text-green-400">
                Green Nest
              </span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg my-1 ${
                    isActive
                      ? "bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`
                }
                tabIndex={isMenuOpen ? 0 : -1}
              >
                <span className="text-lg">{link.icon}</span>
                <span>{link.name}</span>
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
            {user ? (
              <>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate("/profile");
                  }}
                  className="w-full py-2 px-4 mb-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  My Profile
                </button>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="w-full py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <div className="grid gap-3">
                <NavLink
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-center"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  onClick={() => setIsMenuOpen(false)}
                  className="py-2 px-4 border border-green-600 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-50 dark:hover:bg-green-800 transition text-center"
                >
                  Register
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="pt-16" />
      <ToastContainer />
    </>
  );
};

export default NavBar;
