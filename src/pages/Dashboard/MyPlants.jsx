import React, { useEffect, useState, useContext } from "react";
import MyPlantCard from "../../components/MyPlantCard";
import NoPlants from "../../components/NoPlants";
import Loading from "../Loading";
import { AuthContext } from "../../auth/AuthProvider";
import useTitle from "../../hooks/useTitle";

const MyPlants = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useTitle("Green Nest - My Plants");

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
      .catch(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const handleDeleteSuccess = (deletedId) => {
    setPlants((prevPlants) =>
      prevPlants.filter((plant) => plant._id !== deletedId)
    );
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 dark:text-gray-400">
        Please log in to view your plants.
      </div>
    );
  }

  if (loading) return <Loading />;

  const userAddedPlants = plants.filter(
    (plant) => plant.userEmail === user.email
  );

  return userAddedPlants.length === 0 ? (
    <NoPlants message="You haven’t added any plants yet." />
  ) : (
    <div className="min-h-screen px-4 py-10 bg-white dark:bg-zinc-900 transition-colors duration-300">
      <h1 className="text-3xl font-bold text-center mb-10 text-green-700 dark:text-green-400">
        My Plants
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {userAddedPlants.map((plant) => (
          <MyPlantCard
            key={plant._id}
            plant={plant}
            onDeleteSuccess={handleDeleteSuccess}
          />
        ))}
      </div>
    </div>
  );
};

export default MyPlants;
