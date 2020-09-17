import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: black;
  height: 80px;
  font-size: 1em;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 160px;
    font-size: 1.5em;
    bottom: 0;
  }
`;

export const StyledButton = styled.button`
  background-color: white;
  border: none;
  width: 150px;
  height: 30px;
  border-radius: 6px;
  margin-right: 16px;
  font-size: 1em;
  color: black;

  @media (max-width: 768px) {
    width: 250px;
    height: 60px;
    margin-top: 16px;
    font-size: 1.5em;
  }
`;
