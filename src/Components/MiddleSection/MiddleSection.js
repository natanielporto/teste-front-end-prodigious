import styled from "styled-components";

export const StyledVideo = styled.section`
  margin-top: 12px;
  max-width: 300px;
`;

export const StyledContainer = styled.section`
  max-width: 1200px;
  margin: 40px auto;
  display: flex;
  justify-content: space-around;
  color: ${(props) => (props.color ? props.color : "white")};
`;

export const StyledParagraph = styled.text`
  max-width: 850px;
  font-size: 32px;
  color: black;
`;

export const StyledTextPart = styled.text`
  color: red;
  font-weight: 700;
`;
