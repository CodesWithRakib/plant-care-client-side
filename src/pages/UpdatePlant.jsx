import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useLoaderData } from "react-router";
import { AuthContext } from "../auth/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const UpdatePlant = () => {
  const { data } = useLoaderData();
  const [lastWateredDate, setLastWateredDate] = useState(data?.lastWateredDate);
  const [nextWateringDate, setNextWateringDate] = useState(
    data?.nextWateringDate
  );

  const {
    image,
    plantName,
    category,
    description,
    careLevel,
    userName,
    wateringFrequency,
    healthStatus,
    userEmail,
  } = data;

  const handleUpdatePlant = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const plantData = {
      image: formData.get("image"),
      plantName: formData.get("plantName"),
      category: formData.get("category"),
      description: formData.get("description"),
      careLevel: formData.get("careLevel"),
      lastWateredDate: formData.get("lastWateredDate"),
      nextWateringDate: formData.get("nextWateringDate"),
      healthStatus: formData.get("healthStatus"),
      wateringFrequency: formData.get("wateringFrequency"),
      userName: formData.get("userName"),
      userEmail: formData.get("userEmail"),
    };

    console.log(plantData);

    fetch(`http://localhost:5000/api/plants/${data._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status) {
          toast.success(data.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  return (
    <div className="bg-green-50 dark:bg-zinc-800 ">
      <div className="flex flex-col w-full max-w-lg p-6 rounded-md sm:p-10 bg-white text-gray-600 dark:bg-zinc-900 dark:text-white mx-auto">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Update Your Plant</h1>
          <p className="text-sm dark:text-gray-600">
            Fill in the details below to update your plant.
          </p>
        </div>
        <form
          onSubmit={handleUpdatePlant}
          noValidate=""
          action=""
          className="space-y-12"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Plant Name
              </label>
              <input
                type="text"
                name="plantName"
                id="name"
                defaultValue={plantName}
                placeholder="Leroy Jenkins"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Image URL
              </label>
              <input
                type="text"
                name="image"
                defaultValue={image}
                id="image"
                placeholder="https://example.com/image.jpg"
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
                defaultValue={category}
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              >
                <option value="succulent">Succulent</option>
                <option value="flowering">Flowering</option>
                <option value="fern">Fern</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block mb-2 text-sm">
                Description
              </label>
              <input
                defaultValue={description}
                type="text"
                name="description"
                id="description"
                placeholder="A beautiful succulent plant."
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="careLevel" className="block mb-2 text-sm">
                Care Instructions
              </label>
              <select
                defaultValue={careLevel}
                name="careLevel"
                id="careLevel"
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

              <DatePicker
                selected={lastWateredDate}
                onChange={(date) => setLastWateredDate(date)}
                dateFormat="yyyy/MM/dd"
                name="lastWateredDate"
                id="lastWateredDate"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                wrapperClassName="w-full"
                placeholderText="Select a date"
              />
            </div>

            <div>
              <label htmlFor="nextWateringDate" className="block mb-2 text-sm">
                Next Watering Date
              </label>
              <DatePicker
                selected={nextWateringDate}
                onChange={(date) => setNextWateringDate(date)}
                dateFormat="yyyy/MM/dd"
                name="nextWateringDate"
                id="nextWateringDate"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                wrapperClassName="w-full"
                placeholderText="Select a date"
              />
            </div>

            <div>
              <label htmlFor="healthStatus" className="block mb-2 text-sm">
                Health Status
              </label>
              <select
                defaultValue={healthStatus}
                name="healthStatus"
                id="healthStatus"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              >
                <option value="healthy">Healthy</option>
                <option value="average">Average</option>
                <option value="needs attention">Needs Attention</option>
                <option value="dying">Dying</option>
              </select>
            </div>
            <div>
              <label htmlFor="wateringFrequency" className="block mb-2 text-sm">
                Watering Frequency
              </label>
              <input
                defaultValue={wateringFrequency}
                type="text"
                name="wateringFrequency"
                id="wateringFrequency"
                placeholder="Every 2 weeks"
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
                defaultValue={userName}
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
                defaultValue={userEmail}
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
                className="w-full px-8 py-3 font-semibold rounded-md bg-green-500 text-white"
              >
                Update Plant
              </button>
            </div>
          </div>
        </form>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default UpdatePlant;
