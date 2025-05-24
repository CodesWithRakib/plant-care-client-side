import React from "react";
import { Link, useLoaderData } from "react-router";
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
    healthStatus,
    lastWateredDate,
    userName,
    userEmail,
  } = data;
  console.log(data);

  return (
    <div className="">
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center py-20 px-5 bg-white dark:bg-zinc-900 dark:text-white">
        <figure className="w-full md:w-[40%]">
          <img
            src={image ? image : noImage}
            onError={(e) => {
              e.target.onerror = null; // prevents looping
              e.target.src = noImage;
            }}
            className=" w-full h-80 rounded-lg shadow-2xl"
          />
        </figure>
        <div className="flex flex-col gap-2 items-start w-full  md:w-[60%]">
          <h1 className="text-4xl font-bold text-green-400 poppins">
            {plantName?.toUpperCase()}
          </h1>
          <div>
            <p className="text-sm font-thin">
              Added By : <span className="pacifico">{userName}</span>
            </p>

            <p className="text-sm font-thin">
              Email : <span className="pacifico">{userEmail}</span>
            </p>
          </div>
          <div className="flex flex-col gap-1 py-5">
            <p>
              <span className="font-semibold">Category:</span>{" "}
              <span className="ml-2 text-green-500">
                {category?.toUpperCase()}
              </span>
            </p>

            <p>
              <span className="font-semibold">Next Watering Date:</span>{" "}
              <span className="text-green-200 ml-2">
                {format(new Date(nextWateringDate), "MMMM d, yyyy")}
              </span>
            </p>
            <p>
              <span className="font-semibold">Watering Frequency: </span>
              <span className="text-green-200 ml-2">{wateringFrequency}</span>
            </p>
            <p>
              <span className="font-semibold">Care Level:</span>{" "}
              <span className="ml-2"> {careLevel}</span>
            </p>
          </div>

          <div>
            <p>
              <span className="font-semibold">Health Status:</span>{" "}
              <span className="text-green-200 ml-2">{healthStatus}</span>
            </p>

            <p>
              <span className="font-semibold">Last Watered Date:</span>{" "}
              <span className="text-green-200 ml-2">
                {format(new Date(lastWateredDate), "MMMM d, yyyy")}
              </span>
            </p>
          </div>

          <div className="py-5 text-justify">
            <p className="">{description}</p>
          </div>

          <Link
            to={`/all-plants`}
            className="btn border-0 text-white px-5 py-1 bg-green-400 rounded-full btn-primary"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
