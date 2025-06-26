import React, { useContext, useState, useRef } from "react";
import {
  FaGithub,
  FaDribbble,
  FaLinkedin,
  FaCamera,
  FaLink,
  FaSave,
  FaEdit,
  FaTimes,
} from "react-icons/fa";
import { MdEmail, MdWork } from "react-icons/md";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../auth/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import useTitle from "../../hooks/useTitle";

const UserProfile = () => {
  const { logOut, user, updateUser } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [photoFile, setPhotoFile] = useState(null);
  const [profession, setProfession] = useState(user?.profession || "");
  const [bio, setBio] = useState(user?.bio || "");
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
        theme: "colored",
        transition: Bounce,
      });
    } catch (error) {
      toast.error(`❌ Logout failed: ${error.message}`, {
        position: "top-center",
        autoClose: 4000,
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
      const finalPhotoUrl = tempPhotoUrl.trim() || photoURL;
      await updateUser({
        displayName,
        photoURL: finalPhotoUrl || null,
        photoFile: tempPhotoUrl.trim() ? null : photoFile,
        profession,
        bio,
      });

      toast.success("🎉 Profile updated successfully!", {
        theme: "colored",
        transition: Bounce,
      });
      setIsEditing(false);
      setShowUrlInput(false);
      setTempPhotoUrl("");
    } catch (error) {
      toast.error(`❌ Failed to update profile: ${error.message}`, {
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
        setTempPhotoUrl("");
        setShowUrlInput(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const socialLinks = [
    { icon: <FaGithub />, label: "GitHub", url: "#" },
    { icon: <FaDribbble />, label: "Dribbble", url: "#" },
    { icon: <FaLinkedin />, label: "LinkedIn", url: "#" },
    { icon: <MdEmail />, label: "Email", url: `mailto:${user?.email}` },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 dark:from-zinc-900 dark:to-zinc-800 py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer />
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl overflow-hidden">
          {/* Profile Header */}
          <div className="relative bg-green-600 dark:bg-green-800 h-48">
            <div className="absolute -bottom-16 left-6">
              <div className="relative group">
                <div className="w-32 h-32 rounded-full border-4 border-white dark:border-zinc-900 overflow-hidden bg-gray-200">
                  <img
                    src={photoURL || "https://i.ibb.co/gX1zvYF/Profile-Pic.jpg"}
                    alt={`${displayName || "User"}'s profile`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://i.ibb.co/gX1zvYF/Profile-Pic.jpg";
                    }}
                  />
                </div>
                {isEditing && (
                  <label className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer rounded-full">
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
            </div>
            <div className="absolute top-4 right-4">
              {isEditing ? (
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setIsEditing(false);
                      setShowUrlInput(false);
                      setTempPhotoUrl("");
                      setPhotoURL(user?.photoURL || "");
                    }}
                    className="p-2 bg-white dark:bg-zinc-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-zinc-600 transition-colors"
                    aria-label="Cancel"
                  >
                    <FaTimes className="text-gray-700 dark:text-gray-300" />
                  </button>
                  <button
                    onClick={handleUpdateProfile}
                    disabled={isUpdating}
                    className="p-2 bg-green-500 rounded-full shadow-md hover:bg-green-600 transition-colors flex items-center gap-1 text-white"
                    aria-label="Save"
                  >
                    <FaSave />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="p-2 bg-white dark:bg-zinc-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-zinc-600 transition-colors flex items-center gap-1"
                  aria-label="Edit profile"
                >
                  <FaEdit className="text-gray-700 dark:text-gray-300" />
                </button>
              )}
            </div>
          </div>

          {/* Profile Content */}
          <div className="pt-20 px-6 pb-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Main Profile Info */}
              <div className="md:col-span-2">
                {isEditing ? (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Display Name
                      </label>
                      <input
                        type="text"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg dark:bg-zinc-800 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Profession
                      </label>
                      <div className="flex items-center gap-2">
                        <MdWork className="text-gray-500" />
                        <input
                          type="text"
                          value={profession}
                          onChange={(e) => setProfession(e.target.value)}
                          className="w-full px-4 py-2 border rounded-lg dark:bg-zinc-800 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Your profession"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Bio
                      </label>
                      <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg dark:bg-zinc-800 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Tell us about yourself"
                        rows="3"
                      />
                    </div>

                    <div>
                      <button
                        type="button"
                        onClick={() => setShowUrlInput(!showUrlInput)}
                        className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 hover:underline"
                      >
                        <FaLink />
                        {showUrlInput ? "Hide URL field" : "Set photo by URL"}
                      </button>

                      {showUrlInput && (
                        <div className="mt-2 flex gap-2">
                          <input
                            type="url"
                            value={tempPhotoUrl}
                            onChange={(e) => setTempPhotoUrl(e.target.value)}
                            placeholder="Enter image URL"
                            className="flex-1 px-4 py-2 border rounded-lg dark:bg-zinc-800 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          />
                          <button
                            onClick={() => {
                              if (tempPhotoUrl.trim()) {
                                setPhotoURL(tempPhotoUrl);
                              }
                            }}
                            className="px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                          >
                            Preview
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                      {displayName || "Anonymous User"}
                    </h1>
                    {profession && (
                      <div className="flex items-center gap-2 text-lg text-green-600 dark:text-green-400">
                        <MdWork />
                        <p>{profession}</p>
                      </div>
                    )}
                    {bio && (
                      <p className="text-gray-600 dark:text-gray-300">{bio}</p>
                    )}
                  </div>
                )}
              </div>

              {/* Sidebar Info */}
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-zinc-800 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Contact Information
                  </h3>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Email
                      </p>
                      <a
                        href={`mailto:${user?.email}`}
                        className="text-green-600 dark:text-green-400 hover:underline break-all"
                      >
                        {user?.email || "Not provided"}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-zinc-800 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Social Links
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="p-3 bg-white dark:bg-zinc-700 rounded-full shadow-sm hover:shadow-md transition-shadow"
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleLogout}
                  className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
