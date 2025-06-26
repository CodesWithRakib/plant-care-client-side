import { NavLink, Outlet } from "react-router";
import {
  FiHome,
  FiPlusSquare,
  FiList,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Toggle theme (dark/light)
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 dark:bg-zinc-800 transition-colors duration-300">
      {/* Mobile Header */}
      <header className="md:hidden bg-green-600 dark:bg-green-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Green Nest</h1>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md hover:bg-green-700 dark:hover:bg-green-900 transition"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </header>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          ${
            isMobile
              ? `fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out ${
                  isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                }`
              : "w-64 h-screen fixed"
          }
          bg-green-600 dark:bg-green-800 text-white
        `}
      >
        <div className="p-4 h-full flex flex-col">
          <h2 className="text-2xl font-bold mb-8 hidden md:block">Dashboard</h2>
          <nav className="space-y-3 flex-1">
            <NavItem
              to="/dashboard"
              end
              icon={<FiHome />}
              label="Overview"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <NavItem
              to="/dashboard/all-plants"
              icon={<FiList />}
              label="All Plants"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <NavItem
              to="/dashboard/add-plant"
              icon={<FiPlusSquare />}
              label="Add Plant"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <NavItem
              to="/dashboard/my-plants"
              icon={<FiUser />}
              label="My Plants"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </nav>

          {isMobile && (
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="md:hidden p-3 mt-auto text-center rounded-lg hover:bg-green-700 dark:hover:bg-green-900 transition"
            >
              Close Menu
            </button>
          )}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className={`flex-1 md:ml-64 transition-all duration-300`}>
        <div className="w-full max-w-screen-xl mx-auto">
          {/* Sticky Desktop Top Navbar */}
          <div className="hidden md:flex sticky top-0 z-30 bg-white dark:bg-zinc-900 border-b border-green-200 dark:border-green-800 px-6 py-3 justify-between items-center shadow-sm">
            <h2 className="text-xl font-bold text-green-700 dark:text-green-300">
              🌿 Green Nest
            </h2>
            <div className="flex items-center gap-3">
              <NavLink
                to="/"
                className="px-3 py-1 text-sm rounded-md text-green-800 dark:text-green-100 hover:bg-green-100 dark:hover:bg-green-700 transition"
              >
                🏠 Home
              </NavLink>
              <button
                onClick={toggleTheme}
                className="px-3 py-1 text-sm rounded-md bg-green-600 text-white hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 transition"
              >
                {theme === "dark" ? "☀ Light Mode" : "🌙 Dark Mode"}
              </button>
            </div>
          </div>

          {/* Page Content */}
          <div className="p-4">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

// NavItem component
const NavItem = ({ to, icon, label, end, onClick }) => {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center p-3 rounded-lg transition-colors ${
          isActive
            ? "bg-green-700 dark:bg-green-900 font-medium"
            : "hover:bg-green-700/50 dark:hover:bg-green-900/50"
        }`
      }
    >
      <span className="mr-3 text-lg">{icon}</span>
      <span>{label}</span>
    </NavLink>
  );
};

export default Dashboard;
