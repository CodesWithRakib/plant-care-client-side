import React from "react";
import NewPlantCard from "./NewPlantCard";

const NewPlants = () => {
  return (
    <div className="bg-green-50 text-zinc-900">
      <div className="text-center py-10 px-10">
        <h1 className="text-5xl font-bold">New Plants</h1>

        <p className="mt-2 text-lg">
          Discover the latest additions to our plant collection.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5 p-10">
        <NewPlantCard></NewPlantCard>
        <NewPlantCard></NewPlantCard>
        <NewPlantCard></NewPlantCard>
        <NewPlantCard></NewPlantCard>
        <NewPlantCard></NewPlantCard>
        <NewPlantCard></NewPlantCard>
      </div>
    </div>
  );
};

export default NewPlants;
