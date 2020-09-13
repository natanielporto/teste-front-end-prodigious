import React, { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar.jsx";
import MiddleSection from "./Components/MiddleSection/MiddleSection.jsx";
import Cookies from "./Components/Cookies/Cookies.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { StyledFooter } from "./App";

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
      <header>
        <NavBar />
      </header>
      <body>
        <MiddleSection />
      </body>
      <StyledFooter>
        <div>{cookie && <Cookies handleCookies={handleCookies} />}</div>
      </StyledFooter>
    </div>
  );
}

export default App;
