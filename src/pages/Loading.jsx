import React, { useEffect } from "react";

const Loading = () => {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    document.documentElement.setAttribute("data-theme", theme);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white transition-colors">
      {/* Spinner */}
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500 mb-4"></div>

      {/* Loading Text */}
      <p className="text-lg font-semibold tracking-wide">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loading;
