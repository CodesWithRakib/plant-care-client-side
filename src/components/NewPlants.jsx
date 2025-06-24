import React, { useEffect, useState } from "react";
import NewPlantCard from "./NewPlantCard";
import Loading from "../pages/Loading";
import NoPlants from "../components/NoPlants";
import { toast } from "react-toastify";

const NewPlants = () => {
  const [newPlants, setNewPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await fetch(
          "https://b11a10-server-side-codes-with-rakib.vercel.app/api/plants"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setNewPlants(data);
      } catch (err) {
        console.error("Error fetching plants:", err);
        setError(err.message);
        toast.error("Failed to load plants. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPlants();

    // Cleanup function
    return () => {
      // Cancel any ongoing requests if component unmounts
    };
  }, []);

  return (
    <section className="bg-green-50 dark:bg-zinc-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-green-700 dark:text-green-400 poppins">
            New Arrivals
          </h2>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our latest plant additions and bring fresh greenery into
            your space
          </p>
        </div>

        {/* Content Section */}
        {loading ? (
          <Loading />
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-red-500 dark:text-red-400 mb-4">
              Failed to load plants: {error}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
            >
              Retry
            </button>
          </div>
        ) : newPlants?.length === 0 ? (
          <NoPlants />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {newPlants.map((plant) => (
              <NewPlantCard key={plant._id} plant={plant} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewPlants;
