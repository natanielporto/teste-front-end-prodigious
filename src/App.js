import React, { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar.jsx";
import MiddleSection from "./Components/MiddleSection/MiddleSection.jsx";
import Cookies from "./Components/Cookies/Cookies.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [cookie, setCookie] = useState(true);

  const handleCookies = ({ target }) => {
    const clicked = target.innerText;
    setCookie(false);
  };

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <body>
        <MiddleSection />
      </body>
      <footer>{cookie && <Cookies handleCookies={handleCookies} />}</footer>
    </div>
  );
}

export default App;
