import React from "react";
import { StyledButton } from "./SectionTabs";

const SectionTabs = ({ name, bg, handleCheck }) => {
  return (
    <StyledButton onClick={handleCheck} bg={bg}>
      {name}
    </StyledButton>
  );
};

export default SectionTabs;
