import React from "react";
import noImage from "/No_Image.jpg";
import { Link } from "react-router";

const NewPlantCard = ({ plant }) => {
  return (
    <div className="group relative flex flex-col sm:flex-row gap-6 p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-md hover:shadow-lg dark:hover:shadow-zinc-700/50 transition-all duration-300 overflow-hidden h-full">
      {/* Image Container */}
      <div className="w-full sm:w-2/5 h-48 sm:h-full overflow-hidden rounded-lg">
        <img
          src={plant.image || noImage}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = noImage;
          }}
          alt={plant.plantName || "Plant image"}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Content Container */}
      <div className="w-full sm:w-3/5 flex flex-col justify-between py-1">
        <div>
          <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-2 line-clamp-2">
            {plant.plantName}
          </h3>

          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-full">
              {plant.category || "Uncategorized"}
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
            {plant.description || "No description available"}
          </p>
        </div>

        <Link
          to={`/plant-details/${plant._id}`}
          className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 rounded-full transition-colors duration-300 group-hover:shadow-md"
          aria-label={`View details of ${plant.plantName}`}
        >
          View Details
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1.5 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
    </div>
  );
};

export default NewPlantCard;
