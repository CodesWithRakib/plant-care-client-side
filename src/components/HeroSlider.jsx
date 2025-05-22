import React from "react";

const HeroSlider = ({ banner }) => {
  const { title, subHeading, heading, description, image } = banner;
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${image})`,

          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex gap-5 items-center justify-between py-10 px-10 bg-green-50 text-white"
      >
        <div className="flex flex-col gap-1 tracking-tight max-w-[50vw]  p-10 justify-center ">
          <h3 className="text-2xl">{subHeading}</h3>
          <h1 className="text-6xl font-bold">{title}</h1>
          <p className="text-lg w-[70%]">{description}</p>
          <div className="flex gap-4 mt-2">
            <button className="btn px-5 text-white bg-green-600  hover:bg-green-700 rounded-full">
              Get Started
            </button>
            <button className="btn px-5 text-white bg-green-600 hover:bg-green-700 rounded-full">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
