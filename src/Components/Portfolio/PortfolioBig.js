import styled from "styled-components";
// const color = ["#81BC41", "#F68720", "#EE2F3D", "#572185", "#1380A5"];

// function getRandomColor() {
//   return color[Math.floor(Math.random() * color.length)];
// }

export const StyledDiv = styled.div`
  width: 100%;
  height: 355px;
`;

export const WorkContainer = styled.div`
  width: 640px;
  background: black;
  margin: 0;
`;

// export const Square = styled.div`
//   width: 30px;
//   height: 30px;
//   background: pink;
//   z-index: 999;
//   transform: rotate(45deg);
// `;

export const StyledImgContainer = styled.div`
  height: 90px;
  margin: 0;
  width: 640px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 90px;
  -webkit-transition: height 1s;
  transition: height 1s;

  ${WorkContainer}:hover & {
    background: ${(props) => props.color};
    transition: 0.5s;
    height: 120px;
  }
`;

export const StyledImg = styled.img`
  object-fit: none;
  width: 640px;
  max-height: 355px;

  max-height: 355px;
  -webkit-transition: max-height 1s;
  transition: max-height 1s;

  ${WorkContainer}:hover & {
    transition: 0.5s;
    max-height: 325px;
  }
`;

export const StyledButton = styled.button`
  border: none;
  width: 150px;
  height: 50px;
  border-radius: 6px;
  margin-right: 16px;
  font-size: 16px;
  color: black;
  background: ${(props) => props.color};
  color: white;
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
`;

export const StateButtons = styled.div`
  position: fixed;
  bottom: 20px;
  right: 0;
`;

export const StyledInput = styled.input`
  border: none;
  width: 85px;
  height: 50px;
  border-radius: 6px;
  margin-right: 16px;
  font-size: 16px;
  padding: 16px;
  color: white;
  background-color: ${(props) => props.color};

  &:hover {
    width: 250px;
    transition: 1s;
  }

  &:focus {
    width: 250px;
    transition: 1s;
  }

  &::placeholder {
    text-align: center;
  }
`;
