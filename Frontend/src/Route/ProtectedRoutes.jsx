import React, { useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";


const ProtectedRoutes = () => {
  const [isAuthenticated] = useState(true); 
  
  const location = useLocation();

  // If authenticated, render the nested route components via Outlet (Dashboard in your case)
  // Otherwise, redirect to the /signin page.
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export default ProtectedRoutes;
