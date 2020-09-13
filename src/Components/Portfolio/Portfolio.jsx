import React, { useState } from "react";
import { imgs } from "./Imgs";
import { data } from "./Data";
import {
  StyledImgContainer,
  StyledImg,
  StyledDiv,
  WorkContainer,
  StyledButton,
  StateButtons,
} from "./PortfolioBig";
import {
  StyledImgContainerRow,
  StyledImgRow,
  StyledDivRow,
  WorkContainerRow,
} from "./PortfolioRow";

const treatNames = data.map((el) => el.split(".")).map((el) => el[0]);

// const initNames = data.slice(0, 19).map((item) => {
//   return <FilmItem key={item.id} film={item} />;
// });

const color = ["#81BC41", "#F68720", "#EE2F3D", "#572185", "#1380A5"];

const Portfolio = () => {
  const [number, setNumber] = useState(19);
  const [row, setRow] = useState(true);

  const handleMore = ({ target }) => {
    if (target.innerText === "Show more?") {
      if (number <= imgs.length) setNumber(number + 10);
    } else {
      if (number < 0) setNumber(0);
      if (number > 0) setNumber(number - 10);
    }
  };

  const handleToRow = () => {
    setRow(!row);
    row ? console.log("true") : console.log("false");
  };

  return (
    <div>
      {!row && (
        <StyledDiv className="row">
          {imgs.slice(0, Number(number)).map((el, index) => (
            <WorkContainer className="col-4 m-0 p-0">
              <StyledImgContainer
                color={color[Math.floor(Math.random() * color.length)]}
              >
                {treatNames[index].toUpperCase()}
                {/* <Square>'</Square> */}
              </StyledImgContainer>
              <StyledImg src={`/Imgs/${el}`} />
            </WorkContainer>
          ))}
          <StateButtons>
            <StyledButton
              // disabled={number < imgs.length ? false : true}
              color={color[Math.floor(Math.random() * color.length)]}
              onClick={handleToRow}
            >
              {row ? "Display: big" : "Display: rows"}
            </StyledButton>
            <StyledButton
              disabled={number < imgs.length ? false : true}
              color={color[Math.floor(Math.random() * color.length)]}
              onClick={handleMore}
            >
              Show more?
            </StyledButton>
            <StyledButton
              disabled={number <= 10 ? true : false}
              color={color[Math.floor(Math.random() * color.length)]}
              onClick={handleMore}
            >
              Show less?
            </StyledButton>
          </StateButtons>
        </StyledDiv>
      )}
      {row && (
        <StyledDivRow className="row">
          {imgs.slice(0, Number(number)).map((el, index) => (
            <WorkContainerRow className="col-4">
              <div>
                <StyledImgRow src={`/Imgs/${el}`} />
              </div>
              <StyledImgContainerRow
                color={color[Math.floor(Math.random() * color.length)]}
              >
                {treatNames[index].toUpperCase()}
                {/* <Square>'</Square> */}
              </StyledImgContainerRow>
            </WorkContainerRow>
          ))}
          <StateButtons>
            <StyledButton
              // disabled={number < imgs.length ? false : true}
              color={color[Math.floor(Math.random() * color.length)]}
              onClick={handleToRow}
            >
              {row ? "Display: big" : "Display: rows"}
            </StyledButton>
            <StyledButton
              disabled={number < imgs.length ? false : true}
              color={color[Math.floor(Math.random() * color.length)]}
              onClick={handleMore}
            >
              Show more?
            </StyledButton>
            <StyledButton
              disabled={number <= 10 ? true : false}
              color={color[Math.floor(Math.random() * color.length)]}
              onClick={handleMore}
            >
              Show less?
            </StyledButton>
          </StateButtons>
        </StyledDivRow>
      )}
    </div>
  );
};

export default Portfolio;
