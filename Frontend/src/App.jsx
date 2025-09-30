import React, { use } from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./componets/Navbar";
import CargolinkFooter from "./componets/Footer";
import Loader from "./componets/Loder/Loader";
import { useRoutes } from "react-router-dom";
import routes from "./Route/Routes";

function App() {
  const routing = useRoutes(routes);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);


  return (
    <div>
      {loading && <Loader />}
      <div className="">
        <Navbar />
        {routing}
        <CargolinkFooter />
      </div>
      </div>
  );
}

export default App;
