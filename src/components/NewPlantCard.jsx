import React from "react";
import mangoImage from "/mango-2.webp";

const NewPlantCard = () => {
  return (
    <div className="flex gap-5 items-center justify-around py-10 px-10 bg-white text-zinc-900">
      <figure className="w-[40%]">
        <img src={mangoImage} alt="" className="w-full" />
      </figure>
      <div className="w-[60%] flex flex-col gap-2 ">
        <h3 className="text-xl font-semibold">Plant Name</h3>
        <p className="text-sm">Category: Plant Category</p>
        <p className="text-sm">Price: $XX.XX</p>
        <button className="btn   text-white bg-black rounded-full">
          View Details
        </button>
      </div>
    </div>
  );
};

export default NewPlantCard;
