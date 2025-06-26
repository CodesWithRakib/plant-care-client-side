import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../auth/AuthProvider";
import StatCard from "../../components/StatCard";
import { FiBox, FiUser, FiDatabase, FiActivity } from "react-icons/fi";
import PlantCategoryChart from "./OverView/PlantCategoryChart";
import RecentPlantsTable from "./OverView/RecentPlantsTable";
import ErrorAlert from "./ErrorAlert";
import Loading from "../Loading";
import useTitle from "../../hooks/useTitle";
import { format } from "date-fns";
import toast from "react-hot-toast";

const DashboardOverview = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({
    totalItems: 0,
    myItems: 0,
    categories: {},
    recentItems: [],
  });

  useTitle("Green Nest - Dashboard Overview");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://b11a10-server-side-codes-with-rakib.vercel.app/api/plants"
        );
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();

        const userItems = data.filter((item) => item.userEmail === user?.email);

        const categories = data.reduce((acc, item) => {
          acc[item.category] = (acc[item.category] || 0) + 1;
          return acc;
        }, {});

        setStats({
          totalItems: data.length,
          myItems: userItems.length,
          categories,
          recentItems: data.slice(0, 5),
        });
      } catch (err) {
        setError(err.message || "Unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  if (loading) return <Loading />;
  if (error) return <ErrorAlert message={error} />;

  return (
    <div className="space-y-8">
      {/* Welcome Message */}
      <div className="flex justify-between items-center flex-wrap gap-3">
        <h2 className="text-3xl font-bold text-green-600 dark:text-green-400">
          Welcome back, {user?.displayName || "User"}!
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Last updated: {format(new Date(), "PPpp")}
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Plants"
          value={stats.totalItems}
          icon={<FiDatabase className="text-green-500" size={24} />}
          trend="up"
          change="12% from last month"
        />
        <StatCard
          title="My Plants"
          value={stats.myItems}
          icon={<FiBox className="text-blue-500" size={24} />}
          trend={stats.myItems > 0 ? "up" : "none"}
          change={
            stats.myItems > 0
              ? `${Math.round(
                  (stats.myItems / stats.totalItems) * 100
                )}% of total`
              : "No plants yet"
          }
        />
        <StatCard
          title="Active User"
          value={user?.displayName || "Guest"}
          icon={<FiUser className="text-purple-500" size={24} />}
          trend="none"
          change="Currently logged in"
        />
        <StatCard
          title="Categories"
          value={Object.keys(stats.categories).length}
          icon={<FiActivity className="text-orange-500" size={24} />}
          trend="up"
          change={`${Object.keys(stats.categories).length} unique categories`}
        />
      </div>

      {/* Chart and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            Plant Categories Distribution
          </h3>
          <PlantCategoryChart categories={stats.categories} />
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center">
            <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 p-2 rounded-lg mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </span>
            Quick Actions
          </h3>
          <div className="space-y-4">
            <button
              onClick={() => navigate("/dashboard/add-plant")}
              className="w-full flex items-center justify-between bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 px-5 rounded-xl transition-all duration-300 shadow hover:shadow-md transform hover:-translate-y-0.5"
            >
              <span className="font-medium">Add New Plant</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>

            <button
              onClick={() => navigate("/dashboard/all-plants")}
              className="w-full flex items-center justify-between bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-5 rounded-xl transition-all duration-300 shadow hover:shadow-md transform hover:-translate-y-0.5"
            >
              <span className="font-medium">View All Plants</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>

            <button
              onClick={() => toast.success("Feature coming soon!")}
              className="w-full flex items-center justify-between bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white py-3 px-5 rounded-xl transition-all duration-300 shadow hover:shadow-md transform hover:-translate-y-0.5"
            >
              <span className="font-medium">Manage Categories</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Recent Plants */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
          Recently Added Plants
        </h3>
        <RecentPlantsTable plants={stats.recentItems} />
      </div>
    </div>
  );
};

export default DashboardOverview;
