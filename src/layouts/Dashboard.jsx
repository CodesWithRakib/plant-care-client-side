import { NavLink, Outlet } from "react-router";
import { FiHome, FiPlusSquare, FiList, FiUser } from "react-icons/fi";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-zinc-800">
      {/* Sidebar */}
      <aside className="w-64 bg-green-600 p-4 dark:bg-green-800 text-white fixed h-full">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-8">Plant Dashboard</h2>
          <nav className="space-y-3">
            {/* Pass 'end' prop ONLY to Overview for exact matching */}
            <NavItem to="/dashboard" end icon={<FiHome />} label="Overview" />
            <NavItem
              to="/dashboard/all-plants"
              icon={<FiList />}
              label="All Plants"
            />
            <NavItem
              to="/dashboard/add-plant"
              icon={<FiPlusSquare />}
              label="Add Plant"
            />
            <NavItem
              to="/dashboard/my-plants"
              icon={<FiUser />}
              label="My Plants"
            />
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-4 overflow-auto">
        {/* Outlet for nested routes */}
        <Outlet />
      </main>
    </div>
  );
};

// Reusable NavItem component accepts 'end' prop for exact matching
const NavItem = ({ to, icon, label, end }) => {
  return (
    <NavLink
      to={to}
      end={end}
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
