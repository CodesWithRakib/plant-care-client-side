import React, { useEffect, useState, useContext } from "react";
import MyPlantCard from "../../components/MyPlantCard";
import NoPlants from "../../components/NoPlants";
import Loading from "../Loading";
import { AuthContext } from "../../auth/AuthProvider";

const MyPlants = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    let isMounted = true;

    fetch("https://b11a10-server-side-codes-with-rakib.vercel.app/api/plants")
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setPlants(data);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch plants:", error);
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 dark:text-gray-400">
        Please log in to view your plants.
      </div>
    );
  }

  if (loading) return <Loading />;

  const userAddedPlants = plants.filter(
    (plant) => plant?.userEmail === user?.email
  );

  return userAddedPlants.length === 0 ? (
    <NoPlants />
  ) : (
    <div className="min-h-screen bg-green-50 dark:bg-zinc-800 px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10 dark:text-white">
          My Plants
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {userAddedPlants.map((plant) => (
            <MyPlantCard key={plant._id} plant={plant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPlants;
