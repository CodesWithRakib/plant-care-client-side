import React from "react";
import { format } from "date-fns";
import noImage from "/No_Image.jpg";

const PlantCard = ({ plant }) => {
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
    ? format(new Date(nextWateringDate), "MMM d, yyyy")
    : "N/A";

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-sm hover:shadow-md transition duration-300 overflow-hidden border border-zinc-200 dark:border-zinc-700">
      {/* Image */}
      <img
        src={image || noImage}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = noImage;
        }}
        alt={plantName}
        className="w-full h-48 object-cover"
        loading="lazy"
      />

      {/* Info Section */}
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white capitalize">
          {plantName || "Unknown Plant"}
        </h2>

        <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
          <p>
            <strong>Category:</strong> {category || "N/A"}
          </p>
          <p>
            <strong>Watering:</strong> {wateringFrequency || "N/A"}
          </p>
          <p>
            <strong>Next Watering:</strong>{" "}
            <span
              className={
                formattedDate !== "N/A" &&
                new Date(nextWateringDate) < new Date()
                  ? "text-red-500 dark:text-red-400 font-medium"
                  : ""
              }
            >
              {formattedDate}
            </span>
          </p>
        </div>

        <span className="inline-block mt-2 px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 capitalize">
          {careLevel || "N/A"}
        </span>

        <div className="pt-3">
          <a
            href={`/plant-details/${_id}`}
            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
            aria-label={`View details for ${plantName}`}
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
