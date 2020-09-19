import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: 3.8em;
  border: none;
  font-weight: 900;
  margin: 0 32px;
  background: transparent;

  @media (max-width: 768px) {
    font-size: 2em;
    min-width: 510px;
    margin: auto;
  }

  @media (max-width: 375px) {
    min-width: 350px;
    font-size: 2.5em;
    width: 375px;
    margin: 0;
  }

  &:focus {
    outline: none;
  }
`;
