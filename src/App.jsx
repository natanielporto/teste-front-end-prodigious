import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar.jsx";
import MiddleSection from "./Components/MiddleSection/MiddleSection.jsx";
import Cookies from "./Components/Cookies/Cookies.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [cookie, setCookie] = useState(false);

  useEffect(() => {
    JSON.parse(localStorage.getItem("prodigiousCookie")) === false
      ? setCookie(false)
      : setCookie(true);
  }, [cookie]);

  const handleCookies = ({ target }) => {
    if (target.innerText === "Alright") {
      setCookie(localStorage.setItem("prodigiousCookie", "false"));
    }
  };

  return (
    <div className="App">
      <NavBar />
      <MiddleSection />
      {cookie && <Cookies handleCookies={handleCookies} />}
    </div>
  );
}

export default App;
