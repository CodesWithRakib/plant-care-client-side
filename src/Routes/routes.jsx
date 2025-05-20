import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import MyPlants from "../pages/MyPlants";
import AddPlant from "../pages/AddPlant";
import PlantDetails from "../pages/PlantDetails";
import ErrorPage from "../pages/ErrorPage";
import UpdatePlant from "../pages/UpdatePlant";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/my-plants",
        element: <MyPlants></MyPlants>,
      },
      {
        path: "/add-plant",
        element: <AddPlant></AddPlant>,
      },
      {
        path: "/update-plant/:id",
        element: <UpdatePlant></UpdatePlant>,
      },
      {
        path: "plant-details/:id",
        element: <PlantDetails></PlantDetails>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
