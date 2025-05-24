import React, { use, useEffect } from "react";
import { Link } from "react-router";
import MyPlantCard from "../components/MyPlantCard";
import { AuthContext } from "../auth/AuthProvider";
import NoPlants from "../components/NoPlants";
import Loading from "../pages/Loading";

const MyPlants = () => {
  const [plants, setPlants] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const { user } = use(AuthContext);
  const userAddedPlants = plants?.filter(
    (plant) => plant?.userEmail === user?.email
  );

  useEffect(() => {
    fetch("https://b11a10-server-side-codes-with-rakib.vercel.app/api/plants")
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
        setLoading(false);
      });
  }, [plants]);

  return loading ? (
    <Loading></Loading>
  ) : userAddedPlants.length === 0 ? (
    <NoPlants></NoPlants>
  ) : (
    <div>
      {userAddedPlants?.length === 0 ? (
        <NoPlants></NoPlants>
      ) : (
        <div className="">
          <div className="flex flex-col gap-2 items-center justify-center py-10">
            <h1 className="text-2xl font-bold dark:text-white">My Plants</h1>
          </div>
          <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-5 p-5 items-center justify-center">
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
