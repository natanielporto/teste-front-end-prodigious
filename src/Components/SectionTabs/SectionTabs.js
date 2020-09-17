import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: 3.8em;
  border: none;
  font-weight: 900;
  margin: 0 32px;
  background: ${({ bg }) => (bg ? "black" : "transparent")};
  color: ${({ bg }) => (bg ? "white" : "black")};

  @media (max-width: 768px) {
    font-size: 2em;
    width: 400px;
  }

  &:focus {
    outline: none;
  }
`;
