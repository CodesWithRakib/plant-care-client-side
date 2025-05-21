import React from "react";
import mangoImage from "/mango-1.jpg";

const Hero = () => {
  return (
    <div className="flex gap-5 items-center justify-between py-10 px-10 bg-green-50 text-zinc-900">
      <div className="flex flex-col gap-4   p-10 max-w-[800px]">
        <h1 className="text-5xl font-bold">Grow Your Green Paradise Today!</h1>
        <h3 className="text-2xl">Bring nature closer with smart plant care.</h3>
        <p className="text-lg">
          Join our community of plant lovers and start your journey towards a
          greener lifestyle.
        </p>
        <div className="flex gap-4">
          <button className="btn text-white bg-black rounded-full">
            Get Started
          </button>
          <button className="btn text-white bg-black rounded-full">
            Learn More
          </button>
        </div>
      </div>
      <figure className="max-w-[600px]">
        <img src={mangoImage} alt="" className="w-full rounded-2xl" />
      </figure>
    </div>
  );
};

export default Hero;
