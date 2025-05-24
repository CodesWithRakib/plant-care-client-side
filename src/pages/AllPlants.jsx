import React, { useEffect, useState } from "react";
import PlantCard from "../components/PlantCard";
import { Link } from "react-router";
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
      .catch((err) =>
        toast.error(`Error fetching plants: ${err?.message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        })
      );
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

  return loading ? (
    <Loading></Loading>
  ) : (
    <div>
      {plants?.length > 0 ? (
        <div className="max-w-7xl mx-auto px-4 py-8 bg-green-50 dark:bg-zinc-800 dark:text-white text-zinc-900">
          <h1 className="text-3xl font-bold mb-6 text-center">All Plants</h1>

          <div className="mb-6 text-zinc-800 text-right">
            <label htmlFor="sort" className="mr-2 font-medium dark:text-white">
              Sort by:
            </label>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border px-3 py-2 rounded-md dark:bg-zinc-900 dark:text-white"
            >
              <option value="">None</option>
              <option value="nextWateringDate">Next Watering Date</option>
              <option value="careLevel">Care Level</option>
            </select>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-green-50 dark:bg-zinc-900 dark:text-white">
                <tr>
                  <th scope="col" className="px-16 py-3">
                    Plant Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Plant Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Watering Frequency
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Care Level
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Next Watering Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    View Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedPlants?.map((plant) => (
                  <PlantCard key={plant._id} plant={plant} />
                ))}
              </tbody>
            </table>
          </div>
          <ToastContainer></ToastContainer>
        </div>
      ) : (
        <NoPlants></NoPlants>
      )}
    </div>
  );
};

export default AllPlants;
