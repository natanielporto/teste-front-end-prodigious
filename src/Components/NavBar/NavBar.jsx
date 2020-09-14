import React from "react";
import logo from "../../Assets/logo_prodigious.svg";
import { StyledButton, StyledH1, Navbar } from "./NavBar";

const NavBar = () => {
  return (
    <Navbar className="row">
      <StyledH1 className="col-6 d-flex justify-content-around">
        <img src={logo} alt="Logo Prodigious" />
      </StyledH1>
      <div className="col-6 d-flex justify-content-around">
        <div>
          <StyledButton color={"#81BC41"}>About</StyledButton>
          <StyledButton color={"#F68720"}>Portfolio</StyledButton>
          <StyledButton color={"#EE2F3D"}>Contact</StyledButton>
          <StyledButton color={"#572185"}>Our Network</StyledButton>
        </div>
      </div>
    </Navbar>
  );
};

export default NavBar;
