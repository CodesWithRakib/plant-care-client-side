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
  const title = `Green Nest - ${data?.plantName || "Plant Details"}`;
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
  } = data || {};

  const handleEdit = () => {
    navigate(`/update-plant/${_id}`);
  };

  const daysUntilWatering =
    nextWateringDate &&
    Math.ceil(
      (new Date(nextWateringDate) - new Date()) / (1000 * 60 * 60 * 24)
    );

  const healthColors = {
    healthy: "text-green-500",
    average: "text-yellow-500",
    "needs attention": "text-orange-500",
    dying: "text-red-500",
  };

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
                alt={plantName || "Plant Image"}
                className="w-full h-96 object-cover rounded-lg shadow-xl border dark:border-zinc-700"
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                {category?.toUpperCase() || "UNCATEGORIZED"}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <StatBox
                icon={<FaWater />}
                label="Watering"
                value={wateringFrequency || "N/A"}
              />
              <StatBox
                icon={careLevelIcons[careLevel] || "🌱"}
                label="Care Level"
                value={careLevel || "N/A"}
              />
              <StatBox
                icon={<FaHeartbeat />}
                label="Health"
                value={healthStatus || "Healthy"}
                colorClass={healthColors[healthStatus] || "text-green-500"}
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-green-600 dark:text-green-400">
                {plantName?.toUpperCase() || "UNKNOWN PLANT"}
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
                <InfoRow
                  label="Last Watered"
                  value={
                    lastWateredDate
                      ? format(new Date(lastWateredDate), "MMMM d, yyyy")
                      : "Not recorded"
                  }
                />
                <InfoRow
                  label="Next Watering"
                  value={
                    nextWateringDate
                      ? format(new Date(nextWateringDate), "MMMM d, yyyy")
                      : "Not scheduled"
                  }
                  valueClass="text-green-500 font-medium"
                />
                {daysUntilWatering > 0 && (
                  <InfoRow
                    label="Days Until Watering"
                    value={
                      <span
                        className={
                          daysUntilWatering <= 3
                            ? "text-red-500 font-bold"
                            : "text-green-500"
                        }
                      >
                        {daysUntilWatering} day
                        {daysUntilWatering !== 1 ? "s" : ""}{" "}
                        {daysUntilWatering <= 3 && "⚠️"}
                      </span>
                    }
                  />
                )}
              </div>
            </div>

            {/* Plant Details */}
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FaLeaf className="text-green-500" /> Plant Details
              </h2>
              <div className="space-y-3">
                <InfoRow label="Category" value={category} />
                <InfoRow label="Care Level" value={careLevel} />
                <InfoRow
                  label="Health Status"
                  value={healthStatus}
                  valueClass={
                    healthColors[healthStatus] || "text-green-500 capitalize"
                  }
                />
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

            {/* Navigation Buttons */}
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

// 🔧 Reusable Helper Components
const StatBox = ({ icon, label, value, colorClass = "text-green-500" }) => (
  <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow text-center">
    <div className={`text-2xl mb-1 ${colorClass}`}>{icon}</div>
    <p className="font-medium">{label}</p>
    <p className="text-sm text-gray-600 dark:text-gray-300">{value}</p>
  </div>
);

const InfoRow = ({
  label,
  value,
  valueClass = "text-gray-600 dark:text-gray-300 capitalize",
}) => (
  <div className="flex justify-between">
    <span className="font-medium">{label}:</span>
    <span className={valueClass}>{value || "N/A"}</span>
  </div>
);
