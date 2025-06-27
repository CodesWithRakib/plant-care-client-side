import React, { useEffect, useState } from "react";
import NewPlantCard from "./NewPlantCard";
import Loading from "../pages/Loading";
import NoPlants from "../components/NoPlants";
import { toast } from "react-toastify";

const NewPlants = () => {
  const [allPlants, setAllPlants] = useState([]);
  const [displayedPlants, setDisplayedPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const plantsPerPage = 8;

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
        // Sort by date (newest first)
        const sortedPlants = data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setAllPlants(sortedPlants);
        // Initially show first page
        setDisplayedPlants(sortedPlants.slice(0, plantsPerPage));
      } catch (err) {
        console.error("Error fetching plants:", err);
        setError(err.message);
        toast.error("Failed to load plants. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPlants();
  }, []);

  useEffect(() => {
    // Update displayed plants when page changes
    const indexOfLastPlant = currentPage * plantsPerPage;
    const indexOfFirstPlant = indexOfLastPlant - plantsPerPage;
    setDisplayedPlants(allPlants.slice(indexOfFirstPlant, indexOfLastPlant));
  }, [currentPage, allPlants]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="bg-green-50 dark:bg-zinc-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 dark:text-green-400 poppins">
            New Arrivals
          </h2>
          <p className="mt-3 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our latest plant additions and bring fresh greenery into
            your space
          </p>
        </div>

        {/* Content Section */}
        {loading ? (
          <div aria-live="polite">
            <Loading />
          </div>
        ) : error ? (
          <div
            aria-live="polite"
            className="text-center py-10"
            role="alert"
            tabIndex={-1}
          >
            <p className="text-red-600 dark:text-red-500 mb-4 text-lg flex items-center justify-center gap-2">
              <span aria-hidden="true">❌</span> Failed to load plants: {error}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-green-700 hover:bg-green-800 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
            >
              Retry
            </button>
          </div>
        ) : allPlants?.length === 0 ? (
          <NoPlants />
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {displayedPlants.map((plant) => (
                <NewPlantCard key={plant._id} plant={plant} />
              ))}
            </div>

            {/* Pagination */}
            {allPlants.length > plantsPerPage && (
              <div className="flex justify-center mt-12">
                <nav className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      paginate(currentPage > 1 ? currentPage - 1 : 1)
                    }
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-md border border-green-600 text-green-600 dark:text-green-400 dark:border-green-400 hover:bg-green-50 dark:hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Previous page"
                  >
                    &laquo; Prev
                  </button>

                  {Array.from({
                    length: Math.ceil(allPlants.length / plantsPerPage),
                  }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => paginate(index + 1)}
                      className={`px-4 py-2 rounded-md ${
                        currentPage === index + 1
                          ? "bg-green-600 text-white"
                          : "border border-green-600 text-green-600 dark:text-green-400 dark:border-green-400 hover:bg-green-50 dark:hover:bg-zinc-800"
                      }`}
                      aria-label={`Go to page ${index + 1}`}
                    >
                      {index + 1}
                    </button>
                  ))}

                  <button
                    onClick={() =>
                      paginate(
                        currentPage <
                          Math.ceil(allPlants.length / plantsPerPage)
                          ? currentPage + 1
                          : currentPage
                      )
                    }
                    disabled={
                      currentPage ===
                      Math.ceil(allPlants.length / plantsPerPage)
                    }
                    className="px-4 py-2 rounded-md border border-green-600 text-green-600 dark:text-green-400 dark:border-green-400 hover:bg-green-50 dark:hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Next page"
                  >
                    Next &raquo;
                  </button>
                </nav>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default NewPlants;
