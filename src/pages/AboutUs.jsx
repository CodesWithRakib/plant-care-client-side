import React from "react";
import { FiUsers, FiCode, FiHeart } from "react-icons/fi";
import teamImage from "../assets/team.jpg"; // Replace with your team image
import plantImage from "../assets/plant.jpg"; // Replace with plant-related image
import { FaLeaf } from "react-icons/fa";
import useTitle from "../hooks/useTitle";
import { Hand } from "lucide-react";
import { useNavigate } from "react-router";

const AboutUs = () => {
  const title = "GreenNest Dashboard - About Us";
  useTitle(title);
  const navigate = useNavigate();
  const HandleGetStarted = () => {
    navigate("/contact");
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-green-600 dark:text-green-400 mb-4">
          About GreenNest Dashboard
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Cultivating the future of plant management through innovative
          technology and sustainable practices.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <img
              src={plantImage}
              alt="Plants we work with"
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              At GreenNest, we're revolutionizing how plant enthusiasts and
              professionals track, manage, and understand their plant
              collections. Our dashboard provides powerful tools to help you
              nurture your plants and expand your botanical knowledge.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-gray-700 p-4 rounded-lg">
                <FaLeaf className="text-green-500 dark:text-green-400 text-2xl mb-2" />
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  Plant Tracking
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Monitor growth and health metrics
                </p>
              </div>
              <div className="bg-green-50 dark:bg-gray-700 p-4 rounded-lg">
                <FiUsers className="text-green-500 dark:text-green-400 text-2xl mb-2" />
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  Community
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Connect with fellow plant lovers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Meet Our Team
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden max-w-sm">
            <img
              src={teamImage}
              alt="Our team"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                Passionate Plant People
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our diverse team combines horticultural expertise with
                cutting-edge technology to build the best plant management
                tools.
              </p>
              <div className="flex space-x-4">
                <FiCode className="text-green-500 dark:text-green-400" />
                <FiHeart className="text-green-500 dark:text-green-400" />
                <FaLeaf className="text-green-500 dark:text-green-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-green-600 dark:bg-green-800 rounded-xl text-white p-8 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaLeaf size={32} />,
              title: "Sustainability",
              description:
                "We build eco-friendly solutions that respect nature",
            },
            {
              icon: <FiUsers size={32} />,
              title: "Community",
              description: "Growing together with our users is our priority",
            },
            {
              icon: <FiCode size={32} />,
              title: "Innovation",
              description:
                "Continually improving our technology for better results",
            },
          ].map((value, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center text-3xl mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-green-100">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Ready to grow with us?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          Join thousands of plant enthusiasts and professionals who trust
          GreenNest Dashboard to manage their plant collections.
        </p>
        <button
          onClick={HandleGetStarted}
          className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
