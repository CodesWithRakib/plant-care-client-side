import React, { useState } from "react";
import { Link } from "react-router";
import { FaEdit, FaWater, FaLeaf } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { format, isAfter } from "date-fns";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import noImage from "/No_Image.jpg";

const MyPlantCard = ({ plant, onDeleteSuccess }) => {
  const {
    _id,
    image,
    plantName,
    nextWateringDate,
    careLevel,
    wateringFrequency,
  } = plant;

  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    Swal.fire({
      title: "Delete this plant?",
      text: "You won't be able to recover it later.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#22c55e",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it",
      background: "#f3f4f6",
      color: "#111827",
      customClass: {
        popup: "dark:bg-gray-800 dark:text-white",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setIsDeleting(true);
        fetch(
          `https://b11a10-server-side-codes-with-rakib.vercel.app/api/plants/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => {
            if (!res.ok) throw new Error("Network response was not ok");
            return res.json();
          })
          .then((data) => {
            if (data.deletedCount > 0) {
              toast.success(`${plantName} deleted successfully!`);
              onDeleteSuccess?.(_id);
            } else {
              throw new Error("No plant was deleted");
            }
          })
          .catch((err) => {
            toast.error(`Failed to delete plant: ${err.message}`);
          })
          .finally(() => setIsDeleting(false));
      }
    });
  };

  const needsWatering =
    nextWateringDate && isAfter(new Date(), new Date(nextWateringDate));

  return (
    <div className="w-full max-w-sm mx-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden transition hover:shadow-lg hover:scale-[1.01]">
      {/* Image */}
      <div className="relative">
        <img
          src={image || noImage}
          alt={plantName || "Plant Image"}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = noImage;
          }}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        {needsWatering && (
          <div className="absolute top-2 right-2 bg-red-500 dark:bg-red-600 text-white text-xs px-2 py-1 rounded-full flex items-center">
            <FaWater className="mr-1" /> Needs Water
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-green-600 dark:text-green-400 mb-2">
          {plantName || "Unnamed Plant"}
        </h2>

        <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <div className="flex items-center gap-2">
            <FaWater className="text-blue-500 dark:text-blue-400" />
            <span>
              <strong>Water:</strong> {wateringFrequency || "N/A"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <FaWater className="text-blue-500 dark:text-blue-400" />
            <span>
              <strong>Next:</strong>{" "}
              <span
                className={
                  needsWatering
                    ? "text-red-500 dark:text-red-400 font-semibold"
                    : ""
                }
              >
                {nextWateringDate
                  ? format(new Date(nextWateringDate), "MMM d, yyyy")
                  : "N/A"}
              </span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <FaLeaf className="text-green-500 dark:text-green-400" />
            <span>
              <strong>Care:</strong>{" "}
              {careLevel
                ? careLevel.charAt(0).toUpperCase() + careLevel.slice(1)
                : "N/A"}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-4">
          <Link
            to={`/dashboard/update-plant/${_id}`}
            className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white px-4 py-2 rounded-md text-sm"
          >
            <FaEdit />
            <span>Edit</span>
          </Link>

          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm ${
              isDeleting
                ? "bg-red-400 dark:bg-red-500 cursor-not-allowed text-white"
                : "bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 text-white"
            }`}
          >
            <MdDelete />
            <span>{isDeleting ? "Deleting..." : "Delete"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPlantCard;
