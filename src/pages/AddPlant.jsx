import React, { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const AddPlant = () => {
  const { user } = useContext(AuthContext);
  const [lastWateredDate, setLastWateredDate] = useState(new Date());
  const [nextWateringDate, setNextWateringDate] = useState(new Date());
  const handleAddPlant = (event) => {
    event.preventDefault();
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
      userName: formData.get("userName"),
      userEmail: formData.get("userEmail"),
    };

    fetch("http://localhost:5000/api/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantData),
    })
      .then((response) => {
        if (response.ok) {
          console.log(response);
          toast.success("Plant added successfully!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          // event.target.reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Error adding plant", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };
  return (
    <div className="flex flex-col  w-full p-6 rounded-md sm:p-10 dark:bg-zinc-900 dark:text-white mx-auto  ">
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
            <label htmlFor="name" className="block mb-2 text-sm">
              Plant Name
            </label>
            <input
              required
              type="text"
              name="plantName"
              id="name"
              placeholder="Leroy Jenkins"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="image" className="block mb-2 text-sm">
              Image URL
            </label>
            <input
              required
              type="text"
              name="image"
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
              required
              name="category"
              id="category"
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
              required
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
              required
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
              required
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
              required
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
              required
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
              required
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
              required
              type="text"
              name="userName"
              defaultValue={user?.displayName || ""}
              readOnly
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
              required
              type="email"
              name="userEmail"
              defaultValue={user?.email || ""}
              readOnly
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
              className="w-full px-8 py-3 font-semibold rounded-md 
              bg-green-700 text-white hover:bg-green-800 transition dark:bg-green-500 dark:text-gray-50"
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
