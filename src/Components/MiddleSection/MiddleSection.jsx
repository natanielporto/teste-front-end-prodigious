import React, { useState } from "react";
import { StyledContainer } from "./MiddleSection";
import About from "../About/About.jsx";
import Portfolio from "../Portfolio/Portfolio.jsx";
import Contact from "../Contact/Contact.jsx";
import Network from "../Network/Network.jsx";
import SectionTabs from "../SectionTabs/SectionTabs.jsx";

const MiddleSection = () => {
  const [btns, setBtns] = useState([
    { id: 1, name: "\\ About", bg: false },
    { id: 2, name: "\\ Portfolio", bg: true },
    { id: 3, name: "\\ Contact", bg: false },
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
      <StyledContainer color="black">
        {btns.map((el) => (
          <SectionTabs
            key={el.id}
            handleCheck={handleCheck}
            name={el.name}
            bg={el.bg}
          />
        ))}
      </StyledContainer>
      <StyledContainer>
        {btns[0].bg && <About />}
        {btns[1].bg && <Portfolio />}
        {btns[2].bg && <Contact />}
        {btns[3].bg && <Network />}
      </StyledContainer>
    </>
  );
};

export default MiddleSection;
