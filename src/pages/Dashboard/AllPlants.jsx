import React, { useEffect, useState } from "react";
import PlantCard from "../../components/PlantCard";
import NoPlants from "../../components/NoPlants";
import Loading from "../Loading";

const AllPlants = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("card"); // 'card' or 'table'

  useEffect(() => {
    fetch("https://b11a10-server-side-codes-with-rakib.vercel.app/api/plants")
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch plants:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  if (!plants.length) return <NoPlants message="No plants found." />;

  return (
    <div className="min-h-screen bg-green-50 dark:bg-zinc-800 py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-6 dark:text-white">
        All Plants
      </h1>

      {/* View Mode Dropdown */}
      <div className="flex justify-end mb-6">
        <label
          htmlFor="viewMode"
          className="mr-2 font-medium text-zinc-800 dark:text-white"
        >
          View:
        </label>
        <select
          id="viewMode"
          value={viewMode}
          onChange={(e) => setViewMode(e.target.value)}
          className="border border-zinc-300 px-3 py-1 rounded-md dark:bg-zinc-900 dark:text-white dark:border-zinc-600"
        >
          <option value="card">Card View</option>
          <option value="table">Table View</option>
        </select>
      </div>

      {/* Conditionally render */}
      {viewMode === "card" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {plants.map((plant) => (
            <PlantCard key={plant._id} plant={plant} />
          ))}
        </div>
      ) : (
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
              </tr>
            </thead>
            <tbody>
              {plants.map((plant) => (
                <tr
                  key={plant._id}
                  className="border-b border-gray-200 dark:border-zinc-700 hover:bg-green-100 dark:hover:bg-zinc-800"
                >
                  <td className="px-6 py-3 text-center">
                    <img
                      src={plant.image}
                      alt={plant.plantName}
                      className="w-16 h-16 object-cover rounded-md mx-auto"
                    />
                  </td>
                  <td className="px-6 py-3 font-semibold dark:text-white">
                    {plant.plantName}
                  </td>
                  <td className="px-6 py-3 capitalize">{plant.category}</td>
                  <td className="px-6 py-3">{plant.wateringFrequency}</td>
                  <td className="px-6 py-3 capitalize">{plant.careLevel}</td>
                  <td className="px-6 py-3">
                    {new Date(plant.nextWateringDate).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllPlants;
