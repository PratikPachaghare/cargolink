import React from "react";
import ErrorContent from "../componets/NotFound/NotFound404";
import SigninPage from "../pages/Auth/SigninPage";
import SignupPage from "../pages/Auth/signupPage";
import Dashbord from "../pages/Dashbord";
import ProtectedRoute from "./ProtectedRouts";

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
    element: <ProtectedRoute />,
    children: [
      { path: "/", element: <Dashbord/> },
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
