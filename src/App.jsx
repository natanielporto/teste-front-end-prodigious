import React, { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar.jsx";
import MiddleSection from "./Components/MiddleSection/MiddleSection.jsx";
import Cookies from "./Components/Cookies/Cookies.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

let cookieWarn = false;

function App() {
  const [cookie, setCookie] = useState(
    JSON.parse(localStorage.getItem("prodigiousCookie") ? false : true)
  );

  const handleCookies = ({ target }) => {
    const clicked = target.innerText;
    setCookie(localStorage.setItem("prodigiousCookie", "false"));
  };

  return (
    <div className="App">
      <NavBar />
      <MiddleSection />
      <div>{cookie && <Cookies handleCookies={handleCookies} />}</div>
    </div>
  );
}

export default App;
