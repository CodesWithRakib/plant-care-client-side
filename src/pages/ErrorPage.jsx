import React from "react";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('https://i.ibb.co/qMWH3TdN/banner-1.jpg')",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center gap-2 justify-center h-full text-white">
        <div className="text-center">
          <h1 className="text-9xl  font-bold">404</h1>
          <h2 className="text-3xl font-bold text-white ">Page Not Found</h2>
        </div>
        <div className="text-center  space-y-2">
          <h4 className="text-2xl font-medium">Look like you're lost</h4>
          <p>The page you are looking for is not available</p>
          <button
            onClick={() => navigate("/")}
            className="btn bg-amber-600 px-5 py-3"
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
