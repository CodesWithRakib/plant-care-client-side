import React from "react";
import { Link } from "react-router";
import { format } from "date-fns";
import noImage from "/No_Image.jpg";

const PlantCard = ({ plant }) => {
  const { image, plantName, nextWateringDate, careLevel } = plant;
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="p-4">
        <img
          src={image || noImage}
          className="w-full h-20 max-h-full"
          alt={plantName}
        />
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {plantName}
      </td>
      <td className="px-6 py-4">{careLevel}</td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {format(new Date(nextWateringDate), "MMMM d, yyyy")}
      </td>
      <td className="px-6 py-4">
        <Link
          to={`/plant-details/${plant._id}`}
          className="font-medium text-red-600 dark:text-red-500 hover:underline"
        >
          View Details
        </Link>
      </td>
    </tr>
  );
};

export default PlantCard;
