import React from "react";
import { FiTrendingUp, FiTrendingDown, FiMinus } from "react-icons/fi";

const StatCard = ({
  title,
  value,
  icon,
  trend, // 'up', 'down', or 'none'
  change, // description of change
  loading = false,
}) => {
  const trendIcons = {
    up: <FiTrendingUp className="text-green-500" />,
    down: <FiTrendingDown className="text-red-500" />,
    none: <FiMinus className="text-gray-400" />,
  };

  const trendColors = {
    up: "text-green-500",
    down: "text-red-500",
    none: "text-gray-400",
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            {title}
          </h4>
          {loading ? (
            <div className="h-8 w-20 mt-2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          ) : (
            <p className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
              {value}
            </p>
          )}
        </div>
        {icon && (
          <div className="p-3 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300">
            {icon}
          </div>
        )}
      </div>

      {change && (
        <div
          className={`mt-4 flex items-center text-sm ${
            trendColors[trend] || "text-gray-500"
          }`}
        >
          {trendIcons[trend]}
          <span className="ml-1">{change}</span>
        </div>
      )}
    </div>
  );
};

export default StatCard;
