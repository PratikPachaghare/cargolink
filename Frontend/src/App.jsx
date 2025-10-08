import React from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CargolinkFooter from "./components/Footer";
import Loader from "./components/Loader/Loader";
import { useRoutes } from "react-router-dom";
import routes from "./Route/Routes";

function App() {
  const routing = useRoutes(routes);
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && <Loader />}
      <div>
        <Navbar />
        {routing}
        <CargolinkFooter />
      </div>
    </>
  );
}

export default App;
