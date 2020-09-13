import React from "react";
import logo from "../../Assets/logo_prodigious.svg";
import { StyledButton, Navbar } from "./NavBar";

const NavBar = () => {
  return (
    <div>
      <Navbar>
        <div>
          <img src={logo} alt="Logo Prodigious" />
        </div>
        <div>
          <StyledButton color={"#81BC41"}>About</StyledButton>
          <StyledButton color={"#F68720"}>Portfolio</StyledButton>
          <StyledButton color={"#EE2F3D"}>Contact</StyledButton>
          <StyledButton color={"#572185"}>Our Network</StyledButton>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
