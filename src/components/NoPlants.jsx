import React from "react";
import { Link } from "react-router";
import { TbPlantOff } from "react-icons/tb";
import { motion } from "motion/react";

const NoPlants = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center w-full py-16 px-6 text-center bg-white dark:bg-zinc-900 rounded-xl shadow-sm dark:shadow-zinc-800/50"
    >
      <div className="mb-6 p-5 bg-green-50 dark:bg-zinc-800 rounded-full">
        <TbPlantOff className="text-5xl text-green-500 dark:text-green-400" />
      </div>

      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3">
        Your Garden is Empty
      </h2>

      <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-6">
        No plants found in your collection. Start your plant journey by adding
        your first green companion!
      </p>

      <Link
        to="/add-plant"
        className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
        Add Your First Plant
      </Link>

      <p className="mt-4 text-sm text-gray-500 dark:text-gray-500">
        or{" "}
        <Link
          to="/all-plants"
          className="text-green-600 dark:text-green-400 hover:underline"
        >
          browse our collection
        </Link>
      </p>
    </motion.div>
  );
};

export default NoPlants;
