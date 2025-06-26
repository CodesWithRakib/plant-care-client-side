import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useLoaderData } from "react-router";
import toast from "react-hot-toast";
import "react-datepicker/dist/react-datepicker.css";

const UpdatePlant = () => {
  const plantData = useLoaderData();

  const [formData, setFormData] = useState({
    image: plantData?.image || "",
    plantName: plantData?.plantName || "",
    category: plantData?.category || "succulent",
    description: plantData?.description || "",
    careLevel: plantData?.careLevel || "easy",
    lastWateredDate: plantData?.lastWateredDate
      ? new Date(plantData.lastWateredDate)
      : new Date(),
    nextWateringDate: plantData?.nextWateringDate
      ? new Date(plantData.nextWateringDate)
      : new Date(),
    healthStatus: plantData?.healthStatus || "healthy",
    wateringFrequency: plantData?.wateringFrequency || "",
    userName: plantData?.userName || "",
    userEmail: plantData?.userEmail || "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date, field) => {
    setFormData((prev) => ({ ...prev, [field]: date }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `https://b11a10-server-side-codes-with-rakib.vercel.app/api/plants/${plantData._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            lastWateredDate: formData.lastWateredDate.toISOString(),
            nextWateringDate: formData.nextWateringDate.toISOString(),
          }),
        }
      );

      const data = await response.json();

      if (data.modifiedCount > 0) {
        toast.success("🌱 Plant updated successfully!");
      } else {
        throw new Error(data.message || "Failed to update plant");
      }
    } catch (error) {
      toast.error(`❌ Error updating plant: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-full py-6 bg-transparent dark:bg-transparent">
      <div className="max-w-4xl w-full mx-auto p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-md dark:shadow-zinc-700 transition-colors duration-300 overflow-auto">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1 transition-colors duration-300">
            Update Your Plant
          </h1>
          <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
            Keep your plant information up to date
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="plantName"
                className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
              >
                Plant Name
              </label>
              <input
                type="text"
                id="plantName"
                name="plantName"
                value={formData.plantName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
                required
              />
            </div>

            <div>
              <label
                htmlFor="image"
                className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
              >
                Image URL
              </label>
              <input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
                required
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
              >
                <option value="succulent">Succulent</option>
                <option value="flowering">Flowering</option>
                <option value="fern">Fern</option>
                <option value="cactus">Cactus</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="careLevel"
                className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
              >
                Care Level
              </label>
              <select
                id="careLevel"
                name="careLevel"
                value={formData.careLevel}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
              >
                <option value="easy">Easy</option>
                <option value="moderate">Moderate</option>
                <option value="difficult">Difficult</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="lastWateredDate"
                className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
              >
                Last Watered Date
              </label>
              <DatePicker
                id="lastWateredDate"
                selected={formData.lastWateredDate}
                onChange={(date) => handleDateChange(date, "lastWateredDate")}
                dateFormat="MMMM d, yyyy"
                className="w-full px-4 py-2 border rounded-md dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
                maxDate={new Date()}
                required
              />
            </div>

            <div>
              <label
                htmlFor="nextWateringDate"
                className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
              >
                Next Watering Date
              </label>
              <DatePicker
                id="nextWateringDate"
                selected={formData.nextWateringDate}
                onChange={(date) => handleDateChange(date, "nextWateringDate")}
                dateFormat="MMMM d, yyyy"
                className="w-full px-4 py-2 border rounded-md dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
                minDate={new Date()}
                required
              />
            </div>

            <div>
              <label
                htmlFor="healthStatus"
                className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
              >
                Health Status
              </label>
              <select
                id="healthStatus"
                name="healthStatus"
                value={formData.healthStatus}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
              >
                <option value="healthy">Healthy</option>
                <option value="average">Average</option>
                <option value="needs attention">Needs Attention</option>
                <option value="dying">Dying</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="wateringFrequency"
                className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
              >
                Watering Frequency
              </label>
              <input
                type="text"
                id="wateringFrequency"
                name="wateringFrequency"
                value={formData.wateringFrequency}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border rounded-md dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="userName"
                className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
              >
                Your Name
              </label>
              <input
                type="text"
                id="userName"
                name="userName"
                value={formData.userName}
                readOnly
                className="w-full px-4 py-2 border rounded-md bg-gray-100 dark:bg-zinc-700 dark:text-white cursor-not-allowed"
                required
              />
            </div>
            <div>
              <label
                htmlFor="userEmail"
                className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
              >
                Your Email
              </label>
              <input
                type="email"
                id="userEmail"
                name="userEmail"
                value={formData.userEmail}
                readOnly
                className="w-full px-4 py-2 border rounded-md bg-gray-100 dark:bg-zinc-700 dark:text-white cursor-not-allowed"
                required
              />
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-3 font-semibold rounded-md text-white ${
                isSubmitting
                  ? "bg-green-400 dark:bg-green-600 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800"
              }`}
            >
              {isSubmitting ? "Updating..." : "Update Plant"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePlant;
