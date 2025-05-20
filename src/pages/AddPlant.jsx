import React from "react";
import { AuthContext } from "../auth/AuthProvider";
import { ToastContainer } from "react-toastify";

const AddPlant = () => {
  const handleAddPlant = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const plantData = Object.fromEntries(formData);
    console.log(plantData);
  };
  return (
    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 mx-auto my-10 ">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Add Your Plant</h1>
        <p className="text-sm dark:text-gray-600">
          Fill in the details below to add a new plant.
        </p>
      </div>
      <form
        onSubmit={handleAddPlant}
        noValidate=""
        action=""
        className="space-y-12"
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="image" className="block mb-2 text-sm">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              id="image"
              placeholder="https://example.com/image.jpg"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="name" className="block mb-2 text-sm">
              Plant Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Leroy Jenkins"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="category" className="text-sm">
                Category
              </label>
            </div>
            <select
              name="category"
              id="category"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            >
              <option value="succulent">Succulent</option>
              <option value="cactus">Cactus</option>
              <option value="fern">Fern</option>
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block mb-2 text-sm">
              Description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="A beautiful succulent plant."
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="care" className="block mb-2 text-sm">
              Care Instructions
            </label>
            <select
              name="care"
              id="care"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            >
              <option value="easy">easy</option>
              <option value="moderate">moderate</option>
              <option value="difficult">difficult</option>
            </select>
          </div>
          <div>
            <label htmlFor="lastWateringDate" className="block mb-2 text-sm">
              Last Watering Date
            </label>
            <input
              type="date"
              name="lastWateringDate"
              id="lastWateringDate"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="nextWateringDate" className="block mb-2 text-sm">
              Next Watering Date
            </label>
            <input
              type="date"
              name="nextWateringDate"
              id="nextWateringDate"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="healthStatus" className="block mb-2 text-sm">
              Health Status
            </label>
            <input
              type="text"
              name="healthStatus"
              id="healthStatus"
              placeholder="Healthy"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="userName" className="block mb-2 text-sm">
              User Name
            </label>
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="userEmail" className="block mb-2 text-sm">
              User Email
            </label>
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
            >
              Add Plant
            </button>
          </div>
        </div>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddPlant;
