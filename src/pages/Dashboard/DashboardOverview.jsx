import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../auth/AuthProvider";
import StatCard from "../../components/StatCard";
import { FiBox, FiUser, FiDatabase, FiActivity } from "react-icons/fi";
import PlantCategoryChart from "./OverView/PlantCategoryChart";
import RecentPlantsTable from "./OverView/RecentPlantsTable";
import ErrorAlert from "./ErrorAlert";
import Loading from "../Loading";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://b11a10-server-side-codes-with-rakib.vercel.app/api/plants"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        // Filter plants owned by the logged-in user
        const userItems = data.filter((item) => item.userEmail === user?.email);

        // Calculate category counts
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
        setError(err.message || "Unknown error");
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
      {/* Welcome and last updated */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-green-600 dark:text-green-400">
          Welcome back, {user?.displayName || "User"}!
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      {/* Stats Cards */}
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

      {/* Charts and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            Plant Categories Distribution
          </h3>
          <PlantCategoryChart categories={stats.categories} />
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            Quick Actions
          </h3>
          <div className="space-y-3">
            <button
              onClick={() => navigate("/dashboard/add-plant")}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition"
            >
              Add New Plant
            </button>
            <button
              onClick={() => navigate("/dashboard/all-plants")}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition"
            >
              View All Plants
            </button>
            <button
              onClick={() => alert("Manage Categories feature coming soon!")}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg transition"
            >
              Manage Categories
            </button>
          </div>
        </div>
      </div>

      {/* Recent Plants Table */}
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
