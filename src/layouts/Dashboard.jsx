import { NavLink, Outlet } from "react-router";
import {
  FiHome,
  FiPlusSquare,
  FiList,
  FiUser,
  FiMenu,
  FiX,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";
import { useState, useEffect } from "react";
import { Home, Leaf, Menu, Moon, Sun, X } from "lucide-react";

const Dashboard = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [collapsed, setCollapsed] = useState(false);

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
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarWidth = collapsed ? "w-16" : "w-64";

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50 dark:bg-zinc-900 text-gray-800 dark:text-gray-100">
      {isMobile && (
        <header className="fixed top-0 left-0 right-0 z-50 bg-green-600 dark:bg-green-800 text-white border-b border-green-700 dark:border-green-900 px-4 py-3 flex justify-between items-center shadow-md transition-colors duration-300">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Leaf size={22} className="text-white" />
            <h1 className="text-lg font-semibold tracking-wide">Green Nest</h1>
          </div>

          {/* Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md hover:bg-green-700 dark:hover:bg-green-900 transition"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>
      )}

      {/* Mobile Overlay */}
      {isMobile && isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-all duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          h-full overflow-y-auto
          fixed md:relative top-0 left-0 z-50 bg-green-600 dark:bg-green-800 text-white transition-all duration-300
          ${
            isMobile
              ? isMobileMenuOpen
                ? "translate-x-0 w-64"
                : "-translate-x-full w-64"
              : `${sidebarWidth}`
          }
        `}
      >
        <div
          className={`h-full pt-16 md:pt-4 p-4 flex flex-col  ${
            collapsed ? "items-center" : "items-start"
          }`}
        >
          {/* Desktop toggle */}
          {!isMobile && (
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="mb-6 self-end p-2 rounded hover:bg-green-700 dark:hover:bg-green-900 transition"
            >
              {collapsed ? <FiChevronsRight /> : <FiChevronsLeft />}
            </button>
          )}

          <h2 className={`text-2xl font-bold mb-8 ${collapsed && "hidden"}`}>
            Dashboard
          </h2>

          <nav className="space-y-3 flex-1">
            <NavItem
              to="/dashboard"
              end
              icon={<FiHome />}
              label="Overview"
              collapsed={collapsed}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <NavItem
              to="/dashboard/all-plants"
              icon={<FiList />}
              label="All Plants"
              collapsed={collapsed}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <NavItem
              to="/dashboard/add-plant"
              icon={<FiPlusSquare />}
              label="Add Plant"
              collapsed={collapsed}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <NavItem
              to="/dashboard/my-plants"
              icon={<FiUser />}
              label="My Plants"
              collapsed={collapsed}
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </nav>

          {isMobile && (
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 p-3 rounded-lg hover:bg-green-700 dark:hover:bg-green-900 transition"
            >
              Close Menu
            </button>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden pt-16 md:pt-0">
        {!isMobile && (
          <div className="sticky top-0 z-40 bg-white dark:bg-zinc-900 border-b border-green-200 dark:border-green-800 px-6 py-3 flex justify-between items-center shadow-sm">
            {/* Brand */}
            <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
              <Leaf className="w-6 h-6" />
              <h2 className="text-xl font-bold">Green Nest</h2>
            </div>

            {/* Navigation Actions */}
            <div className="flex items-center gap-3">
              <NavLink
                to="/"
                className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-md text-green-800 dark:text-green-100 hover:bg-green-100 dark:hover:bg-green-700 transition"
              >
                <Home size={16} />
                <span className="hidden sm:inline">Home</span>
              </NavLink>

              <button
                onClick={toggleTheme}
                className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-md bg-green-600 text-white hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 transition"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                <span className="hidden sm:inline">
                  {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </span>
              </button>
            </div>
          </div>
        )}

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto h-full bg-white dark:bg-zinc-900">
          <div className="max-w-[1400px] mx-auto p-4 sm:p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

const NavItem = ({ to, icon, label, end, collapsed, onClick }) => (
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
    <span className="text-lg">{icon}</span>
    {!collapsed && <span className="ml-3">{label}</span>}
  </NavLink>
);

export default Dashboard;
