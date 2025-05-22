import React from "react";
import noImage from "/No_Image.jpg";
import { Link } from "react-router";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { format } from "date-fns";

const MyPlantCard = ({ plant }) => {
  const {
    image,
    plantName,
    nextWateringDate,
    careLevel,
    wateringFrequency,
    lastWateredDate,
  } = plant;
  return (
    <div
      class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm 
    text-zinc-800
    "
    >
      <a href="#">
        <img
          class="p-8 rounded-t-lg"
          src={image ? image : noImage}
          onError={(e) => {
            e.target.onerror = null; // prevents looping
            e.target.src = noImage;
          }}
          alt="product image"
        />
      </a>
      <div class="px-5 pb-5 flex flex-col gap-2">
        <a href="#">
          <h5 class="text-xl font-semibold tracking-tight  ">{plantName}</h5>
        </a>
        <div>
          <p className="text-sm">Watering Frequency: {wateringFrequency}</p>
          <p>Last Watered Date: {format(lastWateredDate, "yyyy-MM-dd")}</p>
          <p className="text-sm">
            Next Watering Date: {format(nextWateringDate, "yyyy-MM-dd")}
          </p>
          <p className="text-sm">Care Level: {careLevel}</p>
        </div>
        <div class="flex items-center justify-between">
          <Link
            to={`/update-plant/${plant._id}`}
            class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            <FaEdit size={20} />
          </Link>
          <Link
            to={`/delete-plant/${plant._id}`}
            class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            <MdDelete size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyPlantCard;
