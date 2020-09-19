import styled from "styled-components";

export const StyledDiv = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 375px) {
    width: 375px;
    margin: 0;
  }
`;

export const StyledVideoWrapper = styled.section`
  margin-top: 72px;

  @media (max-width: 768px) {
    margin-top: 0;
  }

  @media (max-width: 375px) {
    height: 315px;
  }
`;

export const StyledVideo = styled.section`
  margin: 12px 40px 16px 0;

  @media (max-width: 768px) {
    display: flex;
    margin: 16px 0;
    justify-content: center;
  }

  @media (max-width: 375px) {
    width: 375px;
    height: 210px;
    padding-top: 24px;
  }
`;

export const StyledRoundBtn = styled.button`
  margin: 8px;
  background: transparent;
  color: transparent;
  width: 24px;
  height: 24px;
  border-radius: 25px;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }

  &:focus {
    outline: none;
  }
`;

export const StyledParagraph = styled.span`
  max-width: 900px;
  font-size: 2em;
  line-height: 40px;
  color: black;

  @media (max-width: 768px) {
    font-size: 1.5em;
    width: 80%;
    text-align: center;
    margin: 0;
  }

  @media (max-width: 375px) {
    width: 90%;
  }
`;

export const StyledTextPart = styled.span`
  color: red;
  font-weight: 700;
`;

export const StyledVideoSelector = styled.span`
  display: flex;
  justify-content: center;
  margin: 0;
  width: 640px;

  @media (max-width: 768px) {
  }

  @media (max-width: 375px) {
    width: 375px;
    margin-top: 0;
  }
`;
