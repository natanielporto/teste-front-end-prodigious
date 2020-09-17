import styled from "styled-components";

export const StyledDivRow = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    margin: 16px 0 9% 0;
  }
`;

export const WorkContainerRow = styled.div`
  background: black;
  height: 100px;
  margin: 0;
  display: flex;
  padding: 0;

  @media (max-width: 768px) {
    width: 768px;
    margin: 2px 0;
  }
`;

export const StyledEffectRow = styled.div`
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: -1;
  margin: 0;
  padding: 0;

  width: 0px;
  -webkit-transition: width 1s;
  transition: width 1s;

  ${WorkContainerRow}:hover & {
    background: ${(props) => props.color};
    transition: 0.25s;
    width: 400px;
    z-index: 1;

    @media (max-width: 768px) {
      width: 60%;
    }
  }

  @media (max-width: 768px) {
    width: 0%;
  }
  /* 
  &::after {
    content: "";
    width: 30px;
    height: 30px;
    position: absolute;
    transform: rotate(45deg) translateX(-50%);
    bottom: -20px;
    left: 50%;
    background-color: ${(
    props
  ) => props.color};
    } */
`;

export const StyledImgRow = styled.img`
  margin: 0;
  padding: 0;
  object-fit: cover;
  width: 646px;
  max-height: 100px;

  max-width: 660px;
  -webkit-transition: max-width 1s;
  transition: max-width 1s;

  ${WorkContainerRow}:hover & {
    transition: 0.5s;
    max-width: 260px;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    max-width: 768px;
    margin: 0;
    padding: 0;
    width: 100%;
  }
`;
