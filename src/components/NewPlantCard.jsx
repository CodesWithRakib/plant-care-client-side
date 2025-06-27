import React from "react";
import noImage from "/No_Image.jpg";
import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";

const NewPlantCard = ({ plant }) => {
  return (
    <article className="group relative flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-md hover:shadow-xl dark:hover:shadow-zinc-700/50 transition-all duration-300 overflow-hidden h-full border border-zinc-200 dark:border-zinc-700">
      {/* Image Section */}
      <div className="w-full sm:w-2/5 h-48 sm:h-56 lg:h-48 xl:h-56 overflow-hidden rounded-lg flex-shrink-0 relative">
        <img
          src={plant.image || noImage}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = noImage;
          }}
          alt={plant.plantName || "Plant image"}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg"
          loading="lazy"
          decoding="async"
        />
        {plant.category && (
          <span className="absolute top-3 left-3 px-2 py-0.5 text-xs font-medium bg-green-600/90 text-white rounded-full shadow-sm">
            {plant.category}
          </span>
        )}
      </div>

      {/* Info Section */}
      <div className="w-full sm:w-3/5 flex flex-col justify-between py-1 gap-4">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-zinc-800 dark:text-zinc-100 mb-1 line-clamp-2">
            {plant.plantName || "Unnamed Plant"}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 line-clamp-3">
            {plant.description || "No description available."}
          </p>
        </div>

        <div className="flex justify-between items-center mt-auto">
          <div className="flex flex-wrap items-center gap-2">
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
            className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 px-2 py-0.5 rounded-full shadow-sm hover:shadow-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
            aria-label={`View details of ${plant.plantName || "this plant"}`}
          >
            See More <FiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Overlay for hover effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
    </article>
  );
};

export default NewPlantCard;
