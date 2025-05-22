import React from "react";
import { useLoaderData } from "react-router";
import MyPlantCard from "../components/MyPlantCard";

const MyPlants = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div>
      <div>
        <h1>My Plants</h1>
        <p>List of my plants goes here </p>
      </div>

      <div>
        {data.map((plant) => (
          <MyPlantCard key={plant._id} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default MyPlants;
