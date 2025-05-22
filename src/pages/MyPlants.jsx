import React, { use } from "react";
import { Link, useLoaderData, useNavigation } from "react-router";
import MyPlantCard from "../components/MyPlantCard";
import { AuthContext } from "../auth/AuthProvider";
import NoPlants from "../components/NoPlants";
import Loading from "../pages/Loading";

const MyPlants = () => {
  const { data } = useLoaderData();
  const { state } = useNavigation();
  console.log(state);

  const { user } = use(AuthContext);
  const userAddedPlants = data.filter(
    (plant) => plant.userEmail === user.email
  );

  return state === "loading" ? (
    <Loading></Loading>
  ) : userAddedPlants.length === 0 ? (
    <NoPlants></NoPlants>
  ) : (
    <div>
      {userAddedPlants?.length === 0 ? (
        <NoPlants></NoPlants>
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
      )}
    </div>
  );
};

export default MyPlants;
