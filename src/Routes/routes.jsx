import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import MyPlants from "../pages/MyPlants";
import AllPlants from "../pages/AllPlants";
import AddPlant from "../pages/AddPlant";
import PlantDetails from "../pages/PlantDetails";
import ErrorPage from "../pages/ErrorPage";
import UpdatePlant from "../pages/UpdatePlant";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import PrivateRoute from "../auth/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <MyPlants></MyPlants>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/api/plants"),
      },
      {
        path: "/add-plant",
        element: (
          <PrivateRoute>
            <AddPlant></AddPlant>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-plants",
        element: <AllPlants></AllPlants>,
      },
      {
        path: "/update-plant/:id",
        element: <UpdatePlant></UpdatePlant>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/plants/${params.id}`),
      },
      {
        path: "plant-details/:id",
        element: <PlantDetails></PlantDetails>,
      },
    ],
  },
  {
    path: "/login",
    element: <SignIn></SignIn>,
  },
  {
    path: "/register",
    element: <SignUp></SignUp>,
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
