import React from "react";
import { Navigate } from "react-router-dom";
import ErrorContent from "../components/NotFound/NotFound404";
import SignupPage from "../pages/Auth/SignupPage";
import SigninPage from "../pages/Auth/SigninPage";
import Dashboard from "../pages/Dashboard";
import SupportPage from "../pages/Support";
import ProtectedRoute from "./ProtectedRouts";
import BookingPage from "../pages/Booking";

const routes = [
  {
    path: "/signin",
    element: <SigninPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/",
    element: <ProtectedRoute />, // must include <Outlet /> inside ProtectedRoute
    children: [
<<<<<<< HEAD
      { path: "/", element: <Dashbord/> },
      { path: "/bookingForm", element: <BookingPage/> },
    //   { path: "/about", element: <About /> },
    //   { path: "/createOrder", element: <CreateOrder />,},

      {
        path: "", // default route
        element: <Dashboard />,
      },
      {
        path: "support", // nested support page
        element: <SupportPage />,
      },
      // Optional nested routes example:
      // { path: "about", element: <About /> },
      // { path: "orders", element: <Orders /> },
>>>>>>> a2b4327 (Update app, routes, dashboard, and components structure)
    ],
  },
  {
    path: "*", // catch-all for 404
    element: <ErrorContent />,
  },
];

export default routes;
