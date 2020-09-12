import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: 56px;
  border: none;
  font-weight: 700;
  background: ${({ bg }) => (bg ? "black" : "transparent")};
  color: ${({ bg }) => (bg ? "white" : "black")};
`;
