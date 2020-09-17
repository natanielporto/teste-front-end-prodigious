import styled from "styled-components";

export const StyledDiv = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledVideo = styled.section`
  margin-top: 12px;
  width: 640px;
  margin-right: 40px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    height: 300px;
    display: flex;
    margin: 16px 0;
    justify-content: center;
  }
`;

export const StyledBtn = styled.button`
  color: black;
  background: orange;
  width: 150px;
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
`;

export const StyledTextPart = styled.span`
  color: red;
  font-weight: 700;
`;

export const StyledButton = styled.button`
  border: none;
  border-radius: 5px;
  background: red;
  color: white;
  margin-left: 16px;

  @media (max-width: 768px) {
    margin-top: 24px;
    width: 350px;
    height: 60px;
  }

  &:focus {
    outline: none;
  }

  &:active {
    background: #f68720;
  }
`;
