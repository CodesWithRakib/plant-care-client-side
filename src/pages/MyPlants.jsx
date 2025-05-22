import React, { use } from "react";
import { Link, useLoaderData } from "react-router";
import MyPlantCard from "../components/MyPlantCard";
import { AuthContext } from "../auth/AuthProvider";

const MyPlants = () => {
  const { data } = useLoaderData();
  const { user } = use(AuthContext);
  const userAddedPlants = data.filter(
    (plant) => plant.userEmail === user.email
  );

  return userAddedPlants.length === 0 ? (
    <div className="flex flex-col gap-2 items-center justify-center p-5 ">
      <h1 className="text-2xl font-bold">No Plants Found</h1>
      <p className="text-lg">You haven't added any plants yet.</p>
      <Link
        to={"/add-plant"}
        className="btn px-5 text-white bg-green-600 hover:bg-green-700 rounded-full"
      >
        Add Plants
      </Link>
    </div>
  ) : (
    <div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="text-2xl font-bold">My Plants</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        {userAddedPlants.map((plant) => (
          <MyPlantCard key={plant._id} plant={plant}></MyPlantCard>
        ))}
      </div>
    </div>
  );
};

export default MyPlants;
