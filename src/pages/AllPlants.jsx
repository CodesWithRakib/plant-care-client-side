import React, { useEffect, useState } from "react";
import PlantCard from "../components/PlantCard";
import NoPlants from "../components/NoPlants";
import Loading from "../pages/Loading";
import { Bounce, toast, ToastContainer } from "react-toastify";

const AllPlants = () => {
  const [plants, setPlants] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://b11a10-server-side-codes-with-rakib.vercel.app/api/plants")
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(`Error fetching plants: ${err?.message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          transition: Bounce,
        });
        setLoading(false);
      });
  }, []);

  const sortedPlants = [...plants].sort((a, b) => {
    if (sortOption === "nextWateringDate") {
      return new Date(a.nextWateringDate) - new Date(b.nextWateringDate);
    } else if (sortOption === "careLevel") {
      const order = { easy: 1, moderate: 2, difficult: 3 };
      return (
        order[a.careLevel?.toLowerCase()] - order[b.careLevel?.toLowerCase()]
      );
    }
    return 0;
  });

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-green-50 dark:bg-zinc-800 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 dark:text-white text-zinc-900">
          All Plants
        </h1>

        {plants.length > 0 ? (
          <>
            <div className="flex justify-end items-center mb-6">
              <label
                htmlFor="sort"
                className="mr-2 font-medium text-zinc-800 dark:text-white"
              >
                Sort by:
              </label>
              <select
                id="sort"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="border border-zinc-300 px-4 py-2 rounded-md dark:bg-zinc-900 dark:text-white dark:border-zinc-600"
              >
                <option value="">None</option>
                <option value="nextWateringDate">Next Watering Date</option>
                <option value="careLevel">Care Level</option>
              </select>
            </div>

            <div className="overflow-x-auto shadow-md rounded-lg bg-white dark:bg-zinc-900">
              <table className="w-full text-sm text-left text-gray-600 dark:text-gray-300">
                <thead className="text-xs uppercase bg-green-100 dark:bg-zinc-800 dark:text-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-center">Image</th>
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Category</th>
                    <th className="px-6 py-4">Watering Frequency</th>
                    <th className="px-6 py-4">Care Level</th>
                    <th className="px-6 py-4">Next Watering</th>
                    <th className="px-6 py-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedPlants.map((plant) => (
                    <PlantCard key={plant._id} plant={plant} />
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <NoPlants />
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default AllPlants;
