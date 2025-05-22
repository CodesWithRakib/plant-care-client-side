import React from "react";
import noImage from "/No_Image.jpg";
import { Link } from "react-router";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { format } from "date-fns";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

const MyPlantCard = ({ plant }) => {
  const {
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
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/api/plants/${plant._id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.message) {
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
            console.error("Error deleting plant:", error);
            toast.error("Error deleting plant", {
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
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
      }
    });
  };
  return (
    <div
      class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm 
    text-zinc-800
    "
    >
      <a href="#">
        <img
          class="p-8 w-full h-80 rounded-t-lg"
          src={image ? image : noImage}
          onError={(e) => {
            e.target.onerror = null; // prevents looping
            e.target.src = noImage;
          }}
          alt="product image"
        />
      </a>
      <div class="px-5 pb-5 flex flex-col gap-2">
        <a href="#">
          <h5 class="text-xl font-semibold tracking-tight  ">{plantName}</h5>
        </a>
        <div>
          <p className="text-sm">Watering Frequency: {wateringFrequency}</p>
          <p>Last Watered Date: {format(lastWateredDate, "yyyy-MM-dd")}</p>
          <p className="text-sm">
            Next Watering Date: {format(nextWateringDate, "yyyy-MM-dd")}
          </p>
          <p className="text-sm">Care Level: {careLevel}</p>
        </div>
        <div class="flex items-center justify-between">
          <Link
            to={`/update-plant/${plant._id}`}
            class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            <FaEdit size={20} />
          </Link>
          <button
            onClick={handleDelete}
            // to={`/delete-plant/${plant._id}`}
            class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            <MdDelete size={20} />
          </button>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default MyPlantCard;
