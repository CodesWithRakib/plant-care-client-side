import React, { useContext, useState, useRef } from "react";
import {
  FaGithub,
  FaDribbble,
  FaSquareXTwitter,
  FaCamera,
  FaLink,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../auth/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { FaSave } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";

const UserProfile = () => {
  const { logOut, user, updateUser } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [photoFile, setPhotoFile] = useState(null);
  const [profession, setProfession] = useState(user?.profession || "");
  const [isUpdating, setIsUpdating] = useState(false);
  const fileInputRef = useRef(null);
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [tempPhotoUrl, setTempPhotoUrl] = useState("");

  const title = `Green Nest - ${displayName || "User Profile"}`;
  useTitle(title);
  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("🚀 Logged out successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    } catch (error) {
      toast.error(`❌ Logout failed: ${error.message}`, {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  const handleUpdateProfile = async () => {
    if (!displayName.trim()) {
      toast.error("Display name cannot be empty", { theme: "colored" });
      return;
    }

    setIsUpdating(true);
    try {
      // If user entered a new URL, use that instead of the file
      const finalPhotoUrl = tempPhotoUrl.trim() || photoURL;

      await updateUser({
        displayName,
        photoURL: finalPhotoUrl || null,
        photoFile: tempPhotoUrl.trim() ? null : photoFile,
        profession,
      });

      toast.success("Profile updated successfully!", {
        theme: "colored",
        transition: Bounce,
      });
      setIsEditing(false);
      setShowUrlInput(false);
      setTempPhotoUrl("");
    } catch (error) {
      toast.error(`Failed to update profile: ${error.message}`, {
        theme: "colored",
        transition: Bounce,
      });
    } finally {
      setIsUpdating(false);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoFile(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        setPhotoURL(event.target.result);
        // Clear URL input if file is selected
        setTempPhotoUrl("");
        setShowUrlInput(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlInputToggle = () => {
    setShowUrlInput(!showUrlInput);
    if (!showUrlInput) {
      // Clear file selection when switching to URL input
      setPhotoFile(null);
      setPhotoURL(user?.photoURL || "");
    }
  };

  const socialLinks = [
    { icon: <FaGithub />, label: "GitHub", url: "#" },
    { icon: <FaDribbble />, label: "Dribbble", url: "#" },
    { icon: <FaSquareXTwitter />, label: "Twitter", url: "#" },
    { icon: <MdEmail />, label: "Email", url: `mailto:${user?.email}` },
  ];

  return (
    <div className="min-h-[calc(100vh-400px)] flex items-center justify-center bg-green-50 dark:bg-zinc-800 p-4">
      <ToastContainer />
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-xl shadow-lg overflow-hidden">
        <div className="p-8 text-center">
          {/* Edit Toggle Button */}
          <div className="flex justify-end mb-4">
            {isEditing ? (
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setIsEditing(false);
                    setShowUrlInput(false);
                    setTempPhotoUrl("");
                    setPhotoURL(user?.photoURL || "");
                  }}
                  className="px-3 py-1 text-sm bg-gray-300 dark:bg-zinc-700 rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdateProfile}
                  disabled={isUpdating}
                  className="px-3 py-1 text-sm bg-green-600 hover:bg-green-700 text-white rounded-md flex items-center gap-1"
                >
                  {isUpdating ? (
                    "Saving..."
                  ) : (
                    <>
                      <FaSave /> Save
                    </>
                  )}
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="px-3 py-1 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md"
              >
                Edit Profile
              </button>
            )}
          </div>

          {/* User Avatar */}
          <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-green-100 dark:border-zinc-700 mb-6 group">
            <img
              src={photoURL || "https://i.ibb.co/gX1zvYF/Profile-Pic.jpg"}
              alt={`${displayName || "User"}'s profile`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://i.ibb.co/gX1zvYF/Profile-Pic.jpg";
              }}
            />
            {isEditing && (
              <label className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <FaCamera className="text-white text-2xl" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  ref={fileInputRef}
                  className="hidden"
                />
              </label>
            )}
          </div>

          {/* Photo URL Input (visible only in edit mode) */}
          {isEditing && (
            <div className="mb-4">
              <button
                type="button"
                onClick={handleUrlInputToggle}
                className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 mb-2"
              >
                <FaLink />{" "}
                {showUrlInput ? "Hide URL field" : "Set photo by URL"}
              </button>

              {showUrlInput && (
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={tempPhotoUrl}
                    onChange={(e) => setTempPhotoUrl(e.target.value)}
                    placeholder="Enter image URL"
                    className="flex-1 px-3 py-2 border rounded-md dark:bg-zinc-800 dark:text-white"
                  />
                  <button
                    onClick={() => {
                      if (tempPhotoUrl.trim()) {
                        setPhotoURL(tempPhotoUrl);
                      }
                    }}
                    className="px-2 bg-green-600 text-white rounded"
                  >
                    Preview
                  </button>
                </div>
              )}
            </div>
          )}

          {/* User Info */}
          <div className="space-y-2 mb-6">
            {isEditing ? (
              <div className="space-y-4">
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md dark:bg-zinc-800 dark:text-white"
                  placeholder="Display Name"
                  required
                />
                <input
                  type="text"
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md dark:bg-zinc-800 dark:text-white"
                  placeholder="Profession"
                />
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {displayName || "Anonymous User"}
                </h2>
                {profession && (
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {profession}
                  </p>
                )}
              </>
            )}
          </div>

          {/* Email */}
          <div className="mb-6">
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-medium">Email: </span>
              <a
                href={`mailto:${user?.email}`}
                className="text-green-600 dark:text-green-400 hover:underline"
              >
                {user?.email || "Not provided"}
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-800"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
