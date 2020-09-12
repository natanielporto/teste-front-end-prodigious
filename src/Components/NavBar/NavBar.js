import styled from "styled-components";

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

  &:hover {
    max-width: 140px;
    color: white;
    border-radius: 6px;
    opacity: 1;
    transition: 1s;
  }

  &:mouse {
  }
`;

export const Navbar = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #e5e5e5;
  width: 100%;
  height: 70px;
`;
