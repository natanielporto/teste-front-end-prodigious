import styled from "styled-components";
// const color = ["#81BC41", "#F68720", "#EE2F3D", "#572185", "#1380A5"];

// function getRandomColor() {
//   return color[Math.floor(Math.random() * color.length)];
// }

export const StyledDivRow = styled.div`
  width: 100%;
  height: 355px;
`;

export const WorkContainerRow = styled.div`
  width: 100%;
  background: black;
  margin: 0;
  display: flex;
  padding: 0;
`;

// export const Square = styled.div`
//   width: 30px;
//   height: 30px;
//   background: pink;
//   z-index: 999;
//   transform: rotate(45deg);
// `;

export const StyledImgContainerRow = styled.div`
  margin: 0;
  width: 0px;
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

  max-width: 325px;
  -webkit-transition: max-width 1s;
  transition: max-width 1s;

  ${WorkContainerRow}:hover & {
    transition: 0.5s;
    max-width: 300px;
  }
`;
