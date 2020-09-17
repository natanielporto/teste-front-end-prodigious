import React, { useState } from "react";
import { StyledContainerTop, StyledContainerBottom } from "./MiddleSection";
import About from "../About/About.jsx";
import Portfolio from "../Portfolio/Portfolio.jsx";
import Contact from "../Contact/Contact.jsx";
import Network from "../Network/Network.jsx";
import SectionTabs from "../SectionTabs/SectionTabs.jsx";

const MiddleSection = () => {
  const [btns, setBtns] = useState([
    { id: 1, name: "\\ About", bg: true },
    { id: 2, name: "\\ Portfolio", bg: false },
    { id: 3, name: "\\ Contact us", bg: false },
    { id: 4, name: "\\ Our Network", bg: false },
  ]);

  const handleCheck = ({ target }) => {
    const change = target.innerText;

    setBtns(
      btns
        .map((el) => {
          if (el.bg === true) {
            return { id: el.id, name: el.name, bg: !el.bg };
          } else {
            return el;
          }
        })
        .map((el) => {
          if (el.name === change) {
            return { id: el.id, name: el.name, bg: !el.bg };
          } else {
            return el;
          }
        })
    );
  };

  return (
    <>
      <StyledContainerTop color="black">
        {btns.map((el) => (
          <SectionTabs
            key={el.id}
            handleCheck={handleCheck}
            name={el.name}
            bg={el.bg}
            className="col-md-6 col-lg-3"
          />
        ))}
      </StyledContainerTop>
      <StyledContainerBottom>
        {btns[0].bg && <About />}
        {btns[1].bg && <Portfolio />}
        {btns[2].bg && <Contact />}
        {btns[3].bg && <Network />}
      </StyledContainerBottom>
    </>
  );
};

export default MiddleSection;
