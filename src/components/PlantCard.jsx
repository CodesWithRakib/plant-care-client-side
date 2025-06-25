import React from "react";
import { Link } from "react-router";
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
    ? format(new Date(nextWateringDate), "MMMM d, yyyy")
    : "N/A";

  return (
    <tr className="bg-white border-b dark:bg-zinc-900 dark:border-zinc-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors duration-200">
      <td className="p-4 w-36">
        <img
          src={image || noImage}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = noImage;
          }}
          alt={plantName}
          title={plantName}
          className="w-full h-28 object-cover rounded-md border border-zinc-200 dark:border-zinc-700"
        />
      </td>

      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white capitalize">
        {plantName || "Unknown"}
      </td>

      <td className="px-6 py-4 capitalize text-gray-800 dark:text-gray-200">
        {category || "N/A"}
      </td>

      <td className="px-6 py-4 text-gray-800 dark:text-gray-200">
        {wateringFrequency || "N/A"}
      </td>

      <td className="px-6 py-4">
        <span className="inline-block px-2 py-1 text-xs font-semibold rounded bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 capitalize">
          {careLevel || "N/A"}
        </span>
      </td>

      <td className="px-6 py-4 text-gray-900 dark:text-white">
        {formattedDate}
      </td>

      <td className="px-6 py-4">
        <Link
          to={`/plant-details/${_id}`}
          className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
        >
          View Details
        </Link>
      </td>
    </tr>
  );
};

export default PlantCard;
