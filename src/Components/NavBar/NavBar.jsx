import React from "react";
import logo from "../../Assets/logo_prodigious.svg";
import burguer from "../../Assets/bars-solid.svg";
import {
  StyledButton,
  StyledLogo,
  Navbar,
  BtnContainer,
  BurguerContainer,
} from "./NavBar";

const NavBar = () => {
  return (
    <Navbar className="row">
      <div className="col-6 d-flex justify-content-around">
        <StyledLogo src={logo} alt="Logo Prodigious" />
      </div>
      <BtnContainer className="col-6">
        <div>
          <StyledButton color={"#81BC41"}>About</StyledButton>
          <StyledButton color={"#F68720"}>Portfolio</StyledButton>
          <StyledButton color={"#EE2F3D"}>Contact</StyledButton>
          <StyledButton color={"#572185"}>Our Network</StyledButton>
        </div>
      </BtnContainer>
      <BurguerContainer className="col-6">
        <img src={burguer} alt="Links" style={{ width: "30px" }} />
      </BurguerContainer>
    </Navbar>
  );
};

export default NavBar;
