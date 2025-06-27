import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { FiArrowLeft, FiHome, FiFrown } from "react-icons/fi";
import useTitle from "../hooks/useTitle";

const ErrorPage = () => {
  const navigate = useNavigate();
  useTitle("Green Nest - Page Not Found");

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-800 flex items-center justify-center px-4 py-10">
      <div className="max-w-xl w-full text-center space-y-8">
        {/* SVG Illustration */}
        <div className="relative w-52 h-52 sm:w-64 sm:h-64 mx-auto">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="8"
              strokeDasharray="500"
              strokeDashoffset="500"
              className="animate-drawCircle"
            />
            <path
              d="M60,90 Q100,130 140,90"
              fill="none"
              stroke="#EF4444"
              strokeWidth="8"
              strokeLinecap="round"
              className="animate-drawMouth"
            />
            <circle
              cx="70"
              cy="70"
              r="8"
              fill="#3B82F6"
              className="animate-blinkLeft"
            />
            <circle
              cx="130"
              cy="70"
              r="8"
              fill="#3B82F6"
              className="animate-blinkRight"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <FiFrown className="text-5xl sm:text-6xl text-amber-400 animate-spin-slow" />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-2">
          <h1 className="text-6xl sm:text-8xl font-bold text-amber-400">404</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Page Not Found
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-md mx-auto">
            The page you’re trying to reach doesn’t exist. It might have been
            moved, renamed, or deleted.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <FiArrowLeft className="text-lg" />
            Go Back
          </button>
          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-amber-500/30"
          >
            <FiHome className="text-lg" />
            Go Home
          </button>
        </div>

        {/* Support */}
        <div className="mt-10 pt-6 border-t border-gray-700">
          <p className="text-gray-500 mb-1">Need assistance?</p>
          <a
            href="mailto:support@greennest.com"
            className="text-amber-400 hover:underline font-medium"
          >
            Contact our support team
          </a>
        </div>
      </div>

      {/* Global Animation Styles */}
      <style jsx global>{`
        @keyframes drawCircle {
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes drawMouth {
          from {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
          }
          to {
            stroke-dasharray: 100;
            stroke-dashoffset: 0;
          }
        }
        @keyframes blinkLeft {
          0%,
          100% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(0.1);
          }
        }
        @keyframes blinkRight {
          0%,
          100% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(0.1);
          }
        }
        @keyframes spinSlow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-drawCircle {
          animation: drawCircle 1.5s ease-out forwards;
        }
        .animate-drawMouth {
          animation: drawMouth 1s ease-out 1s forwards;
        }
        .animate-blinkLeft {
          animation: blinkLeft 2s infinite 2s;
        }
        .animate-blinkRight {
          animation: blinkRight 2s infinite 2.1s;
        }
        .animate-spin-slow {
          animation: spinSlow 6s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ErrorPage;
