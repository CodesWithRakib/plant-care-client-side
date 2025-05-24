import React from "react";
import { useLoaderData } from "react-router";
import noImage from "/No_Image.jpg";
import { format } from "date-fns";

const PlantDetails = () => {
  const data = useLoaderData();
  const {
    image,
    plantName,
    nextWateringDate,
    careLevel,
    wateringFrequency,
    category,
    description,
  } = data;

  return (
    <div className="">
      <div className="flex flex-col sm:flex-row gap-5 items-start justify-center py-10 px-5 bg-white dark:bg-zinc-900 dark:text-white">
        <figure className="w-full sm:w-[40%]">
          <img
            src={image ? image : noImage}
            onError={(e) => {
              e.target.onerror = null; // prevents looping
              e.target.src = noImage;
            }}
            className=" w-full h-80 rounded-lg shadow-2xl"
          />
        </figure>
        <div className="flex flex-col gap-2 items-start w-full  sm:w-[60%]">
          <h1 className="text-4xl font-bold">{plantName?.toUpperCase()}</h1>
          <p>Added By : {data?.userName}</p>
          <div>
            <p>
              <span className="font-semibold">Category:</span> {category}
            </p>

            <p>
              <span className="font-semibold">Next Watering Date:</span>{" "}
              {format(new Date(nextWateringDate), "MMMM d, yyyy")}
            </p>
            <p>
              <span className="font-semibold">Watering Frequency: </span>
              {wateringFrequency}
            </p>
            <p>
              <span className="font-semibold">Care Level:</span> {careLevel}
            </p>
          </div>

          <div>
            <p>{description}</p>
          </div>

          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
