import { StrictMode } from "react";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Routes/routes.jsx";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
