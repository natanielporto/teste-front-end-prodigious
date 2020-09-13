import React, { useState } from "react";
import { imgs } from "./Imgs";
import { data } from "./Data";
import {
  StyledImgContainer,
  StyledImg,
  StyledDiv,
  WorkContainer,
  StyledButton,
  // Square,
} from "./Portfolio";

const treatNames = data.map((el) => el.split(".")).map((el) => el[0]);

// const initNames = data.slice(0, 19).map((item) => {
//   return <FilmItem key={item.id} film={item} />;
// });

const color = ["#81BC41", "#F68720", "#EE2F3D", "#572185", "#1380A5"];

const Portfolio = () => {
  const [number, setnumber] = useState([0, 19]);

  console.log(number);
  return (
    <div>
      <div>
        <StyledDiv className="row">
          {imgs.slice(number[0], number[1]).map((el, index) => (
            <WorkContainer className="col-4 m-0 p-0 std">
              <StyledImgContainer
                color={color[Math.floor(Math.random() * color.length)]}
              >
                {treatNames[index].toUpperCase()}
                {/* <Square>'</Square> */}
              </StyledImgContainer>
              <StyledImg src={`/Imgs/${el}`} />
            </WorkContainer>
          ))}
        </StyledDiv>
      </div>
      <StyledButton>Show more</StyledButton>
    </div>
  );
};

export default Portfolio;
