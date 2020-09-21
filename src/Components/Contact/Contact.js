import styled from 'styled-components';

export const StyledContainer = styled.section`
  color: black;
  min-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 16px;
  }

  @media (max-width: 375px) {
    min-width: 375px;
  }
`;

export const StyledFormWrapper = styled.section`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledInput = styled.input`
  border: 1px solid #572185;
  height: 50px;
  font-size: 1.5em;

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

  @media (max-width: 375px) {
    width: 360px;
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

export const WarnSpan = styled.span`
  color: #fd2d39;
  font-size: 0.8em;
  position: absolute;
  bottom: -18px;
`;

export const StyledResponseWrapper = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8px;
`;

export const StyledH3 = styled.h3`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: 700;
  height: 300px;
  border-radius: 5px;
  background-color: #fd2d39;
  color: white;
  padding: 16px;
  margin-bottom: 16px;
  font-size: 2em;

  @media (max-width: 768px) {
    margin-top: 0px;
    height: 200px;
  }

  @media (max-width: 375px) {
    height: 200px;
    width: 360px;
    font-size: 2em;
  }
`;

export const StyledButton = styled.button`
  border: none;
  width: 100%;
  height: 80px;
  border-radius: 3px;
  font-weight: 700;
  color: white;
  background-color: #572185;
  font-size: 2em;

  &:active {
    background: #fd2d39;
  }

  @media (max-width: 375px) {
    display: none;
  }
`;

export const StyledButtonPhone = styled.button`
  display: none;

  @media (max-width: 375px) {
    border: none;
    height: 80px;
    font-weight: 700;
    color: white;
    border-radius: 5px;
    background-color: #572185;
    width: 100%;
    font-size: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;

    &:active {
      background: #fd2d39;
    }
  }
`;
