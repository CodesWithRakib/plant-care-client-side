import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import useAuth from "../hooks/useAuth";
import Loading from "../pages/Loading";

const Root = () => {
  const { loading } = useAuth();
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="open-sans min-h-screen flex flex-col bg-green-50 dark:bg-zinc-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Sticky top NavBar */}
      <NavBar />

      {/* Main content wrapper */}
      <main className="flex-grow w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Root;
