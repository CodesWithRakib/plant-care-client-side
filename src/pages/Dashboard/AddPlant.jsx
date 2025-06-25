import React, { useContext, useState } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const AddPlant = () => {
  const { user } = useContext(AuthContext);
  const [lastWateredDate, setLastWateredDate] = useState(new Date());
  const [nextWateringDate, setNextWateringDate] = useState(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddPlant = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);

    const plantData = {
      image: formData.get("image"),
      plantName: formData.get("plantName"),
      category: formData.get("category"),
      description: formData.get("description"),
      careLevel: formData.get("careLevel"),
      lastWateredDate: lastWateredDate.toISOString().split("T")[0],
      nextWateringDate: nextWateringDate.toISOString().split("T")[0],
      healthStatus: formData.get("healthStatus"),
      wateringFrequency: formData.get("wateringFrequency"),
      userName: user?.displayName || formData.get("userName"),
      userEmail: user?.email || formData.get("userEmail"),
    };

    try {
      const response = await fetch(
        "https://b11a10-server-side-codes-with-rakib.vercel.app/api/plants",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(plantData),
        }
      );

      const data = await response.json();

      if (data.insertedId) {
        toast.success("✅ Plant added successfully!", {
          position: "top-center",
          autoClose: 2000,
          transition: Bounce,
          theme: "colored",
        });
        event.target.reset();
        setLastWateredDate(new Date());
        setNextWateringDate(new Date());
      } else {
        throw new Error(data.message || "Failed to add plant");
      }
    } catch (error) {
      toast.error(`❌ Failed to add plant: ${error?.message}`, {
        position: "top-center",
        autoClose: 2000,
        transition: Bounce,
        theme: "colored",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-full  bg-transparent dark:bg-transparent">
      <div className="max-w-4xl w-full mx-auto p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-md dark:shadow-zinc-700 transition-colors duration-300 overflow-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2 text-green-600 dark:text-green-400 transition-colors duration-300">
            Add a New Plant
          </h1>
          <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
            Fill in the form below to add your plant to the tracker.
          </p>
        </div>

        <form onSubmit={handleAddPlant} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Plant Name */}
            <div>
              <label htmlFor="plantName" className="block mb-1 font-medium">
                Plant Name
              </label>
              <input
                id="plantName"
                required
                name="plantName"
                placeholder="Aloe Vera"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white transition-colors duration-300"
              />
            </div>

            {/* Image URL */}
            <div>
              <label htmlFor="image" className="block mb-1 font-medium">
                Image URL
              </label>
              <input
                id="image"
                required
                name="image"
                type="url"
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white transition-colors duration-300"
              />
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block mb-1 font-medium">
                Category
              </label>
              <select
                id="category"
                name="category"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white transition-colors duration-300"
              >
                <option value="">Select a category</option>
                <option value="succulent">Succulent</option>
                <option value="flowering">Flowering</option>
                <option value="fern">Fern</option>
                <option value="cactus">Cactus</option>
                <option value="herb">Herb</option>
              </select>
            </div>

            {/* Care Level */}
            <div>
              <label htmlFor="careLevel" className="block mb-1 font-medium">
                Care Level
              </label>
              <select
                id="careLevel"
                name="careLevel"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white transition-colors duration-300"
              >
                <option value="">Select care level</option>
                <option value="easy">Easy</option>
                <option value="moderate">Moderate</option>
                <option value="difficult">Difficult</option>
              </select>
            </div>

            {/* Watering Frequency */}
            <div>
              <label
                htmlFor="wateringFrequency"
                className="block mb-1 font-medium"
              >
                Watering Frequency
              </label>
              <input
                id="wateringFrequency"
                required
                name="wateringFrequency"
                placeholder="Every 7 days"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white transition-colors duration-300"
              />
            </div>

            {/* Health Status */}
            <div>
              <label htmlFor="healthStatus" className="block mb-1 font-medium">
                Health Status
              </label>
              <select
                id="healthStatus"
                name="healthStatus"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white transition-colors duration-300"
              >
                <option value="">Select health status</option>
                <option value="healthy">Healthy</option>
                <option value="average">Average</option>
                <option value="needs attention">Needs Attention</option>
                <option value="dying">Dying</option>
              </select>
            </div>

            {/* Last Watered Date */}
            <div>
              <label
                htmlFor="lastWateredDate"
                className="block mb-1 font-medium"
              >
                Last Watered Date
              </label>
              <DatePicker
                id="lastWateredDate"
                selected={lastWateredDate}
                onChange={(date) => setLastWateredDate(date)}
                dateFormat="yyyy/MM/dd"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white transition-colors duration-300"
                required
                maxDate={new Date()}
              />
            </div>

            {/* Next Watering Date */}
            <div>
              <label
                htmlFor="nextWateringDate"
                className="block mb-1 font-medium"
              >
                Next Watering Date
              </label>
              <DatePicker
                id="nextWateringDate"
                selected={nextWateringDate}
                onChange={(date) => setNextWateringDate(date)}
                dateFormat="yyyy/MM/dd"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white transition-colors duration-300"
                required
                minDate={new Date()}
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block mb-1 font-medium">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Brief details about the plant..."
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white h-24 resize-none transition-colors duration-300"
              required
            />
          </div>

          {/* User Info (ReadOnly) */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="userName" className="block mb-1 font-medium">
                Your Name
              </label>
              <input
                id="userName"
                name="userName"
                defaultValue={user?.displayName}
                readOnly
                className="w-full px-4 py-2 border rounded-md bg-gray-100 dark:bg-zinc-700 dark:border-zinc-600 cursor-not-allowed transition-colors duration-300"
                required
              />
            </div>
            <div>
              <label htmlFor="userEmail" className="block mb-1 font-medium">
                Your Email
              </label>
              <input
                id="userEmail"
                name="userEmail"
                defaultValue={user?.email}
                readOnly
                className="w-full px-4 py-2 border rounded-md bg-gray-100 dark:bg-zinc-700 dark:border-zinc-600 cursor-not-allowed transition-colors duration-300"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-md transition duration-300 ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Adding..." : "Submit Plant"}
            </button>
          </div>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
};

export default AddPlant;
