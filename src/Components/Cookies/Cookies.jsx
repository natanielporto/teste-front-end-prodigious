import React from "react";
import { StyledButton, StyledSection } from "./Cookies";

const Cookies = ({ handleCookies }) => {
  return (
    <div className="p-absolute">
      <StyledSection>
        <div>
          <p className="mx-3 my-0">This website uses cookies:</p>
        </div>
        <div>
          <StyledButton onClick={handleCookies}>Alright</StyledButton>
          <StyledButton onClick={handleCookies}>Read more</StyledButton>
        </div>
      </StyledSection>
    </div>
  );
};

export default Cookies;
