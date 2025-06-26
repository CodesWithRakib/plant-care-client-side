import React from "react";
import noImage from "/No_Image.jpg";
import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";

const NewPlantCard = ({ plant }) => {
  return (
    <article className="group relative flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg dark:hover:shadow-gray-700/50 transition-all duration-300 overflow-hidden h-full border border-gray-100 dark:border-gray-700">
      {/* Image Container */}
      <div className="w-full sm:w-2/5 h-48 sm:h-56 lg:h-48 xl:h-56 overflow-hidden rounded-lg flex-shrink-0 relative">
        <img
          src={plant.image || noImage}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = noImage;
          }}
          alt={plant.plantName || "Plant image"}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          decoding="async"
        />
        {/* Category badge - positioned on image */}
        {plant.category && (
          <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold bg-green-600/90 text-white rounded-full backdrop-blur-sm">
            {plant.category}
          </span>
        )}
      </div>

      {/* Content Container */}
      <div className="w-full sm:w-3/5 flex flex-col justify-between py-1 gap-4">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2 line-clamp-2">
            {plant.plantName || "Unnamed Plant"}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
            {plant.description || "No description available."}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {/* Additional metadata can go here */}
            {plant.sunlight && (
              <span className="text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full">
                ☀️ {plant.sunlight}
              </span>
            )}
            {plant.water && (
              <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full">
                💧 {plant.water}
              </span>
            )}
          </div>

          <Link
            to={`/plant-details/${plant._id}`}
            className="inline-flex items-center justify-center px-4 sm:px-5 py-2 text-sm font-medium text-white rounded-full transition duration-300
            bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600
            shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            aria-label={`View details of ${plant.plantName || "this plant"}`}
          >
            Details
            <FiArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
    </article>
  );
};

export default NewPlantCard;
