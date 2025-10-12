import React from "react";
import ErrorContent from "../componets/NotFound/NotFound404";


import Dashbord from "../pages/Dashbord";

import BookingPage from "../pages/Booking";
import SignInPage from "../pages/Auth/SigninPage";
import SignUpPage from "../pages/Auth/SignupPage";
import ProtectedRoutes from "./ProtectedRoutes";
import OrderPage from "../pages/Order";
import SupportPage from "../pages/Support";
import ProfilePage from "../pages/Profile";
import RidesOnTheWay from "../pages/RideOnTheWay";

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
      { path: "/order", element: <OrderPage/> },
      { path: "/support", element: <SupportPage/> },
      { path: "/profile", element: <ProfilePage/> },
      { path: "/rideOnTheWay", element: <RidesOnTheWay/> },
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
