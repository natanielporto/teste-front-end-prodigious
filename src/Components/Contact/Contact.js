import styled from "styled-components";

export const StyledContainer = styled.section`
  color: black;
  min-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledInput = styled.input`
  border: 1px solid #572185;

  &::placeholder {
    color: #572185;
  }

  &:focus {
    border-color: #fd2d39;
    color: #fd2d39;
  }

  &:focus::placeholder {
    color: #fd2d39;
  }

  @media (max-width: 768px) {
    height: 50px;
    font-size: 1.5em;
  }
`;

export const StyledTextArea = styled.textarea`
  border: 1px solid #572185;

  &::placeholder {
    color: #572185;
  }

  &:focus {
    border-color: #fd2d39;
    color: #fd2d39;
  }

  &:focus::placeholder {
    color: #fd2d39;
  }

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

export const StyledButton = styled.button`
  border: none;
  width: 100%;
  height: 45px;
  border-radius: 3px;
  font-weight: 700;
  color: white;
  background-color: #572185;

  &:active {
    background: #fd2d39;
  }

  @media (max-width: 768px) {
    height: 80px;
    font-size: 2em;
  }
`;

export const WarnSpan = styled.span`
  color: #fd2d39;
  font-size: 0.8em;
`;

export const StyledH3 = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  height: 100px;
  border-radius: 5px;
  background-color: #fd2d39;
  color: white;
  padding: 16px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    height: 200px;
    font-size: 2em;
  }
`;
