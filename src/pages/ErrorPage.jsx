import React from "react";
import { useNavigate } from "react-router";
import useTitle from "../hooks/useTitle";

const ErrorPage = () => {
  const navigate = useNavigate();
  const title = "Green Nest - 404 Not Found";
  useTitle(title);

  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('https://i.ibb.co/qMWH3TdN/banner-1.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
        <div className="text-center text-white px-6 space-y-6">
          <h1 className="text-8xl font-extrabold">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold">Page Not Found</h2>
          <p className="text-lg md:text-xl font-light">
            Oops! The page you’re looking for doesn’t exist.
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-6 rounded-full transition duration-300"
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
