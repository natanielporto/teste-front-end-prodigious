import styled from "styled-components";

export const StyledContainerTop = styled.section`
  display: flex;
  margin: 32px 0;
  justify-content: center;

  @media (max-width: 768px) {
    margin: 16px 0 0 0;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 375px;
  }
`;

export const StyledIdleContainerTop = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 10%;

  @media (max-width: 768px) {
    margin-top: 30%;
    font-size: 2em;
    text-align-last: left;
  }
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
  @media (max-width: 375px) {
    display: none;
  }
`;

export const StyledSmall = styled.section`
  text-align-last: left;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 376px) {
    display: none;
  }
`;
