import styled from "styled-components";

export const StyledContainerTop = styled.section`
  display: flex;
  margin: 32px 0;
  justify-content: center;
  /* color: ${(props) => (props.color ? props.color : "white")}; */

  @media (max-width: 768px) {
    margin: 16px 0 0 0;
    flex-direction: column;
    align-items: center;
  }

  /* @media (max-width: 375px) {
    margin: 0;
    width: 375px;
  } */
`;

export const StyledContainerBottom = styled.section`
  display: flex;
  margin: 32px 0;
  justify-content: center;
  color: ${(props) => (props.color ? props.color : "white")};

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const StyledBig = styled.section`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledSmall = styled.section`
  @media (min-width: 765px) {
    display: none;
  }
`;
