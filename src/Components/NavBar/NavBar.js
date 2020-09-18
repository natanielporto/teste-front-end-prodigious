import styled from "styled-components";

export const Navbar = styled.header`
  background-color: #e5e5e5;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  margin: 0;
  padding: 0 24px;

  @media (max-width: 768px) {
    height: 100px;
  }

  @media (min-width: 769px) {
    height: 100px;
  }
`;

export const StyledLogo = styled.img`
  width: 150px;
  display: flex;
  justify-content: space-around;
  background-color: #e5e5e5;
  border: none;

  @media (min-width: 376px) {
    width: 200px;
  }
`;

export const BtnContainer = styled.div`
  display: none;

  @media (min-width: 376px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export const BurguerContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: black;

  @media (min-width: 376px) {
    display: none;
  }
`;

export const StyledButton = styled.button`
  background-color: black;
  margin: 8px;
  background-color: ${(props) => props.color};
  color: ${(props) => props.color};
  border: none;
  border-radius: 50px;
  white-space: nowrap;
  overflow: hidden;
  opacity: 0.3;
  max-width: 40px;
  height: 40px;
  -webkit-transition: max-width 1s;
  transition: max-width 1s;

  @media (max-width: 768px) {
    font-size: 1.1em;
  }

  &:hover {
    max-width: 140px;
    color: white;
    border-radius: 6px;
    opacity: 1;
    transition: 1s;
  }

  &:focus {
    color: white;
    border-radius: 6px;
    opacity: 1;
    max-width: 140px;
    outline: none;
  }
`;
