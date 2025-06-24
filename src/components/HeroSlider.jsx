import React from "react";
import { Link } from "react-router";

const HeroSlider = ({ banner }) => {
  const { title, subHeading, heading, description, image, link, buttonText } =
    banner;

  return (
    <div className="relative w-full">
      {/* Background Image with Gradient Overlay */}
      <div
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 100%), url(${image})`,
        }}
        className="flex items-center justify-start h-[70vh] min-h-[500px] md:h-[80vh] bg-cover bg-center bg-no-repeat"
      >
        {/* Content Container */}
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-2xl space-y-4 md:space-y-6 p-6 md:p-8 rounded-lg backdrop-blur-sm bg-black/10 dark:bg-white/5">
            {/* Subheading */}
            <p className="text-green-400 dark:text-green-300 text-lg md:text-xl font-medium">
              {subHeading}
            </p>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              {heading}
            </h1>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl text-green-300 dark:text-green-200 font-semibold">
              {title}
            </h2>

            {/* Description */}
            <p className="text-gray-200 dark:text-gray-300 text-base md:text-lg max-w-2xl">
              {description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to={link}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105"
              >
                {buttonText || "Get Started"}
              </Link>
              <Link
                to="/all-plants"
                className="px-6 py-3 bg-transparent border-2 border-green-600 dark:border-green-500 text-green-600 dark:text-green-400 hover:bg-green-600/10 dark:hover:bg-green-500/10 font-medium rounded-full transition-all duration-300"
              >
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
