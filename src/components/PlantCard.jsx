import React from "react";
import { format } from "date-fns";
import noImage from "/No_Image.jpg";

const PlantCardSimple = ({ plant }) => {
  const {
    _id,
    image,
    plantName,
    nextWateringDate,
    careLevel,
    wateringFrequency,
    category,
  } = plant;

  const formattedDate = nextWateringDate
    ? format(new Date(nextWateringDate), "MMMM d, yyyy")
    : "N/A";

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={image || noImage}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = noImage;
        }}
        alt={plantName}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 capitalize text-gray-900 dark:text-white">
          {plantName || "Unknown"}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 capitalize">
          <strong>Category:</strong> {category || "N/A"}
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Watering Frequency:</strong> {wateringFrequency || "N/A"}
        </p>
        <p>
          <span className="inline-block px-2 py-1 mt-2 text-xs font-semibold rounded bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 capitalize">
            {careLevel || "N/A"}
          </span>
        </p>
        <p className="mt-2 text-gray-900 dark:text-white">
          <strong>Next Watering:</strong> {formattedDate}
        </p>
        <div className="mt-4">
          <a
            href={`/plant-details/${_id}`}
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlantCardSimple;
