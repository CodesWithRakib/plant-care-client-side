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
import PrivacyPolicy from "../pages/Privacy";
import TermsOfService from "../pages/Terms";
import Forum from "../pages/Forum";
import NewTopic from "../pages/NewTopic";

export const router = createBrowserRouter([
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
        path: "/plant-details/:id",
        element: (
          <PrivateRoute>
            <PlantDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b11a10-server-side-codes-with-rakib.vercel.app/api/plants/${params.id}`
          ),
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
        path: "/privacy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms",
        element: <TermsOfService />,
      },
      {
        path: "/forum",
        element: <Forum />,
      },
      {
        path: "/forum/new-topic",
        element: (
          <PrivateRoute>
            <NewTopic />
          </PrivateRoute>
        ),
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
        path: "/dashboard/update-plant/:id",
        element: (
          <PrivateRoute>
            <UpdatePlant />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b11a10-server-side-codes-with-rakib.vercel.app/api/plants/${params.id}`
          ),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/dashboard/plant-details/:id",
        element: (
          <PrivateRoute>
            <PlantDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b11a10-server-side-codes-with-rakib.vercel.app/api/plants/${params.id}`
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
