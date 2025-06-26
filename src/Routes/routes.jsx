import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Dashboard from "../layouts/Dashboard";

import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import PrivateRoute from "../auth/PrivateRoute";
import Loading from "../pages/Loading";

// Pages
import MyPlants from "../pages/Dashboard/MyPlants";
import AddPlant from "../pages/Dashboard/AddPlant";
import AllPlants from "../pages/Dashboard/AllPlants";
import PlantDetails from "../pages/PlantDetails";
import UpdatePlant from "../pages/Dashboard/UpdatePlant";
import UserProfile from "../pages/Dashboard/UserProfile";
import DashboardOverview from "../pages/Dashboard/DashboardOverview"; // 👈 default dashboard page
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Support from "../pages/Support";

export const router = createBrowserRouter([
  // Root layout for public routes
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/all-plants",
        element: <AllPlants />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-plant/:id",
        element: <UpdatePlant />,
        loader: ({ params }) =>
          fetch(
            `https://b11a10-server-side-codes-with-rakib.vercel.app/api/plants/${params.id}`
          ),
        hydrateFallbackElement: <Loading />,
      },
    ],
  },

  // Auth routes outside layouts
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },

  // Dashboard layout (Private)
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <DashboardOverview />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-plants",
        element: (
          <PrivateRoute>
            <MyPlants />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-plants",
        element: (
          <PrivateRoute>
            <AllPlants />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/add-plant",
        element: (
          <PrivateRoute>
            <AddPlant />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/plant-details/:id",
        element: (
          <PrivateRoute>
            <PlantDetails />
          </PrivateRoute>
        ),
      },
    ],
  },

  // Fallback error page
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
