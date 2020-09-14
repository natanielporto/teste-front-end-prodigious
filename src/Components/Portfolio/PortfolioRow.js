import styled from "styled-components";

export const StyledDivRow = styled.div`
  width: 100%;
  height: 100px;
  background: black;
`;

export const WorkContainerRow = styled.div`
  width: 640px;
  background: black;
  height: 100px;
  margin: 0;
  display: flex;
  padding: 0;
`;

export const StyledEffectRow = styled.div`
  margin: 0;
  width: 320px;
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
    transition: 0.5s;
    width: 340px;
    z-index: 1;
  }
`;

export const StyledImgRow = styled.img`
  margin: 0;
  padding: 0;
  object-fit: cover;
  width: 640px;
  max-height: 100px;

  max-width: 640px;
  -webkit-transition: max-width 1s;
  transition: max-width 1s;

  ${WorkContainerRow}:hover & {
    transition: 0.5s;
    max-width: 300px;
  }
`;
