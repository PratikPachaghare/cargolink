import React, { use } from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./componets/Navbar";
import CargolinkFooter from "./componets/Footer";
import Loader from "./componets/Loder/Loader";
import { useRoutes } from "react-router-dom";
import routes from "./Route/Routes";
import { AuthProvider } from "./context/AuthContext";


function App() {
  const routing = useRoutes(routes);
  const [loading, setLoading] = useState(false);

  return (
    <AuthProvider>
      {loading && <Loader />}
      <div>
        <Navbar />
        {routing}
        <CargolinkFooter />
      </div>
    </AuthProvider>
  );
}

export default App;
