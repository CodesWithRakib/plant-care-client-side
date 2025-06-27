import React from "react";
import { format, isBefore } from "date-fns";
import noImage from "/No_Image.jpg";
import { GiWateringCan, GiSun } from "react-icons/gi";
import { motion } from "motion/react";
import { FiArrowRight } from "react-icons/fi";

const PlantCard = ({ plant }) => {
  const {
    _id,
    image,
    plantName,
    nextWateringDate,
    careLevel,
    category,
    healthStatus,
  } = plant;

  const isWateringOverdue =
    nextWateringDate && isBefore(new Date(nextWateringDate), new Date());

  // Status badge colors
  const statusColors = {
    healthy: "bg-green-500",
    "needs-care": "bg-yellow-500",
    critical: "bg-red-500",
    default: "bg-gray-500",
  };

  const careLevelColors = {
    easy: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200",
    medium:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200",
    difficult: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200",
    default: "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-200",
  };

  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 dark:border-zinc-700 flex flex-col h-full"
    >
      {/* Image with status badges */}
      <div className="relative h-36 w-full">
        <img
          src={image || noImage}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = noImage;
          }}
          alt={plantName || "Plant image"}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-2 left-2 right-2 flex justify-between">
          <span className="px-2 py-0.5 text-xs font-medium bg-green-600/90 text-white rounded-full">
            {category || "Plant"}
          </span>
          <span
            className={`px-2 py-0.5 text-xs font-medium text-white rounded-full ${
              statusColors[healthStatus?.toLowerCase()] || statusColors.default
            }`}
          >
            {healthStatus || "Status"}
          </span>
        </div>
      </div>

      {/* Content - Essential Info Only */}
      <div className="p-3 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-base font-semibold text-gray-900 dark:text-white line-clamp-1 capitalize">
            {plantName || "Unnamed Plant"}
          </h3>
          <span
            className={`px-2 py-0.5 text-xs font-medium rounded-full ${
              careLevelColors[careLevel?.toLowerCase()] ||
              careLevelColors.default
            }`}
          >
            {careLevel || "Care"}
          </span>
        </div>

        {/* Quick status indicators */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300">
            <GiSun className="text-yellow-500" />
            <span>Sun</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300">
            <GiWateringCan className="text-blue-500" />
            <span>Water</span>
          </div>
        </div>

        {/* Watering status - Most important info */}
        <div
          className={`mt-auto p-2 rounded-md text-sm ${
            isWateringOverdue
              ? "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300"
              : "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-medium">
              {isWateringOverdue ? "Water Now!" : "Next Watering"}
            </span>
            <span>
              {nextWateringDate
                ? format(new Date(nextWateringDate), "MMM d")
                : "N/A"}
            </span>
          </div>
        </div>

        {/* Single action button */}
        <a
          href={`/plant-details/${_id}`}
          className="mt-2 w-full py-1.5 text-sm font-medium text-center text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors flex items-center justify-center gap-1"
        >
          Details <FiArrowRight className="h-3 w-3" />
        </a>
      </div>
    </motion.div>
  );
};

export default PlantCard;
