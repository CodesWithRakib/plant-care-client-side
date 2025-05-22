import React from "react";
import { Link } from "react-router";

const NoPlants = () => {
  return (
    <div className="text-center py-10 text-gray-500 dark:text-gray-400 flex flex-col items-center justify-center bg-white dark:bg-zinc-900">
      <h2 className="text-xl font-semibold mb-2">No plants found</h2>
      <p className="mb-4">
        Start growing your garden by adding your first plant 🌿
      </p>
      <Link
        to="/add-plant"
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
      >
        Add Plant
      </Link>
    </div>
  );
};

export default NoPlants;
