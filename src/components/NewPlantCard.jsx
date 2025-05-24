import React from "react";
import noImage from "/No_Image.jpg";
import { Link } from "react-router";

const NewPlantCard = ({ plant }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-5 justify-around py-10 px-10 bg-white dark:bg-zinc-900 dark:text-white text-zinc-900 rounded-2xl items-center max-w-md mx-auto w-full">
      <figure className="w-full sm:w-[40%] ">
        <img
          src={plant.image ? plant.image : noImage}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = noImage;
          }}
          alt=""
          className="w-full h-50 rounded-2xl"
        />
      </figure>
      <div className="w-full sm:w-[60%] flex flex-col gap-2 ">
        <h3 className="text-xl font-semibold text-green-400">
          {plant.plantName}
        </h3>
        <p className="text-sm">
          <span className="font-semibold">Category:</span> {plant.category}
        </p>
        <p className="text-sm">{plant.description}</p>
        <Link
          to={`/plant-details/${plant._id}`}
          className="btn   text-white bg-green-600 rounded-full mt-2"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default NewPlantCard;
