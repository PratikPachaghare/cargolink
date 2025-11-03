import React, { useState } from "react";
import "./App.css";
import Navbar from "./componets/Navbar";
import CargolinkFooter from "./componets/Footer";
import Loader from "./componets/Loder/Loader";
import { useRoutes } from "react-router-dom";
import routes from "./Route/Routes";
import { AuthProvider } from "./context/AuthContext"; // ✅ import AuthProvider

function App() {
  const routing = useRoutes(routes);
  const [loading, setLoading] = useState(false);

  return (
<<<<<<< Updated upstream
    <div>
      {loading && <Loader />}
      <div className="">
=======
    <AuthProvider> {/* ✅ Wrap your app in AuthProvider */}
      {loading && <Loader />}
      <div>
>>>>>>> Stashed changes
        <Navbar />
        {routing}
        <CargolinkFooter />
      </div>
    </AuthProvider>
  );
}

export default App;
