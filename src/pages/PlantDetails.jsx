import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import noImage from "/No_Image.jpg";
import { format } from "date-fns";
import {
  FaEdit,
  FaWater,
  FaLeaf,
  FaHeartbeat,
  FaInfoCircle,
} from "react-icons/fa";
import useTitle from "../hooks/useTitle";

const PlantDetails = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const title = `Green Nest - ${data.plantName || "Plant Details"}`;
  useTitle(title);

  const {
    _id,
    image,
    plantName,
    nextWateringDate,
    careLevel,
    wateringFrequency,
    category,
    description,
    healthStatus,
    lastWateredDate,
    userName,
    userEmail,
  } = data;

  const handleEdit = () => {
    navigate(`/update-plant/${_id}`);
  };

  // Calculate days until next watering
  const daysUntilWatering = nextWateringDate
    ? Math.ceil(
        (new Date(nextWateringDate) - new Date()) / (1000 * 60 * 60 * 24)
      )
    : null;

  // Health status color mapping
  const healthColors = {
    healthy: "text-green-500",
    average: "text-yellow-500",
    "needs attention": "text-orange-500",
    dying: "text-red-500",
  };

  // Care level icons
  const careLevelIcons = {
    easy: "🌱",
    moderate: "🌿",
    difficult: "🌳",
  };

  return (
    <div className="min-h-screen bg-green-50 dark:bg-zinc-900 px-4 py-8 text-zinc-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        {/* Edit Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={handleEdit}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition"
          >
            <FaEdit /> Edit Plant
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="relative">
              <img
                src={image || noImage}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = noImage;
                }}
                alt={plantName}
                className="w-full h-96 object-cover rounded-lg shadow-xl border dark:border-zinc-700"
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                {category?.toUpperCase()}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow text-center">
                <div className="text-green-500 text-2xl mb-1">
                  <FaWater />
                </div>
                <p className="font-medium">Watering</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {wateringFrequency || "N/A"}
                </p>
              </div>
              <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow text-center">
                <div className="text-green-500 text-2xl mb-1">
                  {careLevelIcons[careLevel] || "🌱"}
                </div>
                <p className="font-medium">Care Level</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 capitalize">
                  {careLevel || "N/A"}
                </p>
              </div>
              <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow text-center">
                <div
                  className={`text-2xl mb-1 ${
                    healthColors[healthStatus] || "text-green-500"
                  }`}
                >
                  <FaHeartbeat />
                </div>
                <p className="font-medium">Health</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 capitalize">
                  {healthStatus || "Healthy"}
                </p>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-green-600 dark:text-green-400">
                {plantName?.toUpperCase()}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Added by {userName || "Unknown"}
              </p>
            </div>

            {/* Watering Info */}
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FaWater className="text-blue-500" /> Watering Information
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Last Watered:</span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {lastWateredDate
                      ? format(new Date(lastWateredDate), "MMMM d, yyyy")
                      : "Not recorded"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Next Watering:</span>
                  <span className="text-green-500 font-medium">
                    {nextWateringDate
                      ? format(new Date(nextWateringDate), "MMMM d, yyyy")
                      : "Not scheduled"}
                  </span>
                </div>
                {daysUntilWatering && (
                  <div className="flex justify-between">
                    <span className="font-medium">Days Until Watering:</span>
                    <span
                      className={
                        daysUntilWatering <= 3
                          ? "text-red-500 font-bold"
                          : "text-green-500"
                      }
                    >
                      {daysUntilWatering} day
                      {daysUntilWatering !== 1 ? "s" : ""}
                      {daysUntilWatering <= 3 && " ⚠️"}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Plant Details */}
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FaLeaf className="text-green-500" /> Plant Details
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Category:</span>
                  <span className="text-gray-600 dark:text-gray-300 capitalize">
                    {category || "N/A"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Care Level:</span>
                  <span className="text-gray-600 dark:text-gray-300 capitalize">
                    {careLevel || "N/A"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Health Status:</span>
                  <span
                    className={`capitalize ${
                      healthColors[healthStatus] || "text-green-500"
                    }`}
                  >
                    {healthStatus || "Healthy"}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            {description && (
              <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FaInfoCircle className="text-blue-500" /> Description
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {description}
                </p>
              </div>
            )}

            {/* Owner Info */}
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Owner Information</h2>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">Name:</span>{" "}
                  <span className="text-gray-600 dark:text-gray-300">
                    {userName || "Unknown"}
                  </span>
                </p>
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  <a
                    href={`mailto:${userEmail}`}
                    className="text-green-600 dark:text-green-400 hover:underline"
                  >
                    {userEmail || "Not provided"}
                  </a>
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/all-plants"
                className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-center transition"
              >
                View All Plants
              </Link>
              <button
                onClick={handleEdit}
                className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
              >
                <FaEdit /> Edit This Plant
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
