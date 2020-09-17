import styled from "styled-components";

export const Navbar = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #e5e5e5;
  height: 70px;

  @media (max-width: 768px) {
    width: 768px;
    height: 100px;
    margin: 0;
  }
`;

export const StyledH1 = styled.button`
  background-color: #e5e5e5;
  border: none;
`;

export const StyledButton = styled.button`
  background-color: black;
  margin-right: 16px;
  background-color: ${(props) => props.color};
  color: ${(props) => props.color};
  border: none;
  border-radius: 50px;
  white-space: nowrap;
  overflow: hidden;
  opacity: 0.3;
  max-width: 0px;
  -webkit-transition: max-width 1s;
  transition: max-width 1s;

  @media (max-width: 768px) {
    max-width: 40px;
    font-size: 1.1em;
    height: 40px;
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
