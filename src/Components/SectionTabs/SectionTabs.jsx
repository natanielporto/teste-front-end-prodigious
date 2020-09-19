import React from "react";
import { StyledButton } from "./SectionTabs";

const SectionTabs = ({ name, handleCheck }) => {
  return <StyledButton onClick={handleCheck}>{name}</StyledButton>;
};

export default SectionTabs;
