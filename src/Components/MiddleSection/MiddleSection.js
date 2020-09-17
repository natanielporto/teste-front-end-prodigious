import styled from "styled-components";

export const StyledContainerTop = styled.section`
  display: flex;
  margin: 32px 0;
  justify-content: center;
  color: ${(props) => (props.color ? props.color : "white")};

  @media (max-width: 768px) {
    margin: 16px 0 0 0;
    flex-direction: column;
    align-items: center;
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
