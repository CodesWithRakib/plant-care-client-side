import React, { useContext } from "react";
import { FaDribbble, FaGithub, FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { Bounce, toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../auth/AuthProvider";

const UserProfile = () => {
  const { logOut, user } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Log Out Success", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      })
      .catch((error) => {
        toast.error(`Error logging out: ${error?.message}`, {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      });
  };
  return (
    <>
      <ToastContainer></ToastContainer>
      <div className="flex justify-center items-center min-h-[calc(100vh-400px)] bg-green-50 dark:bg-zinc-800">
        <div className="flex flex-col justify-center max-w-lg w-full mx-auto p-6 shadow-md rounded-xl sm:px-12 bg-white text-zinc-500 dark:bg-zinc-900 dark:text-white">
          <img
            src={user?.photoURL}
            alt=""
            className="w-32 h-32 mx-auto rounded-full  aspect-square"
          />
          <div className="space-y-4 text-center divide-y dark:divide-gray-300">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">
                {user?.displayName}
              </h2>
              <p className="px-5 text-xs sm:text-base ">{user?.profession}</p>
            </div>
            <div className="flex justify-center pt-2 space-x-4 align-center">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="GitHub"
                className="p-2 rounded-md  hover:dark:text-violet-600"
              >
                <FaGithub />
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Dribble"
                className="p-2 rounded-md  hover:dark:text-violet-600"
              >
                <FaDribbble />
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Twitter"
                className="p-2 rounded-md hover:dark:text-violet-600"
              >
                <FaSquareXTwitter />
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Email"
                className="p-2 rounded-md hover:dark:text-violet-600"
              >
                <MdEmail />
              </a>
            </div>
            <div>
              <p className="pt-2 text-sm text-gray-600 dark:text-white ">
                Email:{" "}
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline dark:text-violet-600"
                >
                  {user?.email}
                </a>
              </p>
            </div>

            <div className="flex gap-2 justify-center items-center">
              <button
                onClick={handleLogout}
                className="bg-red-500 py-1.5 px-4 rounded-2xl text-white"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
