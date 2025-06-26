import { StrictMode } from "react";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Routes/routes.jsx";
import { createRoot } from "react-dom/client";
import AuthProvider from "./auth/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
);
