import React from "react";
import { Link } from "react-router";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { format } from "date-fns";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import noImage from "/No_Image.jpg";

const MyPlantCard = ({ plant }) => {
  const {
    _id,
    image,
    plantName,
    nextWateringDate,
    careLevel,
    wateringFrequency,
    lastWateredDate,
  } = plant;

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#22c55e",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://b11a10-server-side-codes-with-rakib.vercel.app/api/plants/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              toast.success("Plant deleted successfully!", {
                position: "top-center",
                autoClose: 3000,
                theme: "colored",
              });
            }
          })
          .catch((err) => {
            toast.error(`Failed to delete plant: ${err.message}`, {
              position: "top-center",
              autoClose: 3000,
              theme: "colored",
            });
          });
      }
    });
  };

  return (
    <div className="w-full max-w-md mx-auto border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-md bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white overflow-hidden transition hover:shadow-lg">
      <img
        src={image || noImage}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = noImage;
        }}
        alt={plantName}
        className="w-full h-64 object-cover"
      />

      <div className="px-5 py-4 space-y-2">
        <h2 className="text-2xl font-bold text-green-600">{plantName}</h2>

        <div className="text-sm space-y-1">
          <p>
            <span className="font-semibold">Watering Frequency:</span>{" "}
            {wateringFrequency || "N/A"}
          </p>
          <p>
            <span className="font-semibold">Last Watered:</span>{" "}
            {lastWateredDate
              ? format(new Date(lastWateredDate), "yyyy-MM-dd")
              : "N/A"}
          </p>
          <p>
            <span className="font-semibold">Next Watering:</span>{" "}
            {nextWateringDate
              ? format(new Date(nextWateringDate), "yyyy-MM-dd")
              : "N/A"}
          </p>
          <p>
            <span className="font-semibold">Care Level:</span>{" "}
            <span className="text-green-500 capitalize">
              {careLevel || "N/A"}
            </span>
          </p>
        </div>

        <div className="flex justify-between items-center mt-4">
          <Link
            to={`/update-plant/${_id}`}
            className="flex items-center gap-1 text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md transition"
            title="Edit Plant"
          >
            <FaEdit />
            Edit
          </Link>

          <button
            onClick={handleDelete}
            className="flex items-center gap-1 text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition"
            title="Delete Plant"
          >
            <MdDelete />
            Delete
          </button>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

export default MyPlantCard;
