import React, { useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";


const ProtectedRoute = () => {
  const [isAuthenticated] = useState(true); 
  
  const location = useLocation();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
