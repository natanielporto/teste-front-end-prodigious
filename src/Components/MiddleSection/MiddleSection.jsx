import React, { useState } from "react";
import {
  StyledContainerTop,
  StyledContainerBottom,
  StyledBig,
  StyledSmall,
} from "./MiddleSection";
import About from "../About/About.jsx";
import Portfolio from "../Portfolio/Portfolio.jsx";
import Contact from "../Contact/Contact.jsx";
import Network from "../Network/Network.jsx";
import SectionTabs from "../SectionTabs/SectionTabs.jsx";

const MiddleSection = () => {
  const [btns, setBtns] = useState([
    { id: 1, name: "\\ About", bg: false },
    { id: 2, name: "\\ Portfolio", bg: false },
    { id: 3, name: "\\ Contact us", bg: false },
    { id: 4, name: "\\ Our Network", bg: false },
  ]);

  const handleCheck = ({ target }) => {
    const change = target.innerText;
    setBtns(
      btns.map((el) => (el.name === change ? { ...el, bg: !el.bg } : el))
    );
  };

  return (
    <>
      {/* Renders if + than cel mode */}
      <StyledBig>
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
      </StyledBig>

      {/* Renders when in cel mode */}
      <StyledSmall>
        <StyledContainerTop>
          <SectionTabs
            handleCheck={handleCheck}
            name="\ About"
            className="col-md-6 col-lg-3"
          />
          {btns[0].bg && <About />}
          <SectionTabs
            handleCheck={handleCheck}
            name="\ Portfolio"
            className="col-md-6 col-lg-3"
          />
          {btns[1].bg && <Portfolio />}
          <SectionTabs
            handleCheck={handleCheck}
            name="\ Contact us"
            className="col-md-6 col-lg-3"
          />
          {btns[2].bg && <Contact />}
          <SectionTabs
            handleCheck={handleCheck}
            name="\ Our Network"
            className="col-md-6 col-lg-3"
          />
          {btns[3].bg && <Network />}
        </StyledContainerTop>
      </StyledSmall>
    </>
  );
};

export default MiddleSection;
