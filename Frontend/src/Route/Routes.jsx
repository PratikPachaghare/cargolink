import React from "react";
import ErrorContent from "../componets/NotFound/NotFound404";


import Dashbord from "../pages/Dashbord";

import BookingPage from "../pages/Booking";
import SignInPage from "../pages/Auth/SigninPage";
import SignUpPage from "../pages/Auth/SignupPage";
import ProtectedRoutes from "./ProtectedRoutes";

const routes = [
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  }, 
  {
    path: "/",
    element: <ProtectedRoutes />,
    children: [
      { path: "/", element: <Dashbord/> },
      { path: "/bookingForm", element: <BookingPage/> },
    //   { path: "/about", element: <About /> },
    //   { path: "/createOrder", element: <CreateOrder />,},
    ],
  },
  {
    path: "*",
    element: <ErrorContent />,
  },
];


export default routes;
