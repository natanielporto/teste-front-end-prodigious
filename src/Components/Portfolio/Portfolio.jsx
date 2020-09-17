import React, { useState } from "react";
import { imgs } from "./Imgs";
import { data } from "./Data";
import {
  StyledEffect,
  StyledImg,
  StyledDiv,
  WorkContainer,
  StyledButton,
  StateButtons,
  StyledInput,
} from "./PortfolioBig";
import {
  StyledEffectRow,
  StyledImgRow,
  StyledDivRow,
  WorkContainerRow,
} from "./PortfolioRow";

const Portfolio = () => {
  const [names, setNames] = useState(data);
  const [arr, setArr] = useState(imgs);
  const [number, setNumber] = useState(19);
  const [row, setRow] = useState(true);

  const treatNames = names.map((el) => el.split(".")).map((el) => el[0]);

  const color = ["#81BC41", "#F68720", "#EE2F3D", "#572185", "#1380A5"];

  const handleMore = ({ target }) => {
    if (target.innerText === "Show more?") {
      if (number <= arr.length) setNumber(number + 10);
    } else {
      if (number < 0) setNumber(0);
      if (number > 0) setNumber(number - 10);
    }
  };

  const handleToRow = () => {
    setRow(!row);
    row ? console.log("true") : console.log("false");
  };

  const handleSearch = (event) => {
    const search = event.target.value;
    if (event.keyCode === 13) {
      setArr(imgs.filter((el) => el.includes(search.toLowerCase())));
      setNames(data.filter((el) => el.includes(search.toLowerCase())));
    }
  };

  return (
    <div>
      {!row && (
        <StyledDiv className="row">
          {arr.slice(0, Number(number)).map((el, index) => (
            <WorkContainer
              className="col-lg-4 col-md-6 col- m-0 p-0"
              key={index}
            >
              <StyledEffect
                color={color[Math.floor(Math.random() * (color.length - 1))]}
              >
                {treatNames[index].toUpperCase()}
              </StyledEffect>
              <StyledImg
                src={`/Imgs/${el}`}
                alt={`Image from the ${treatNames[
                  index
                ].toUpperCase()} campaign.`}
              />
            </WorkContainer>
          ))}
          <StateButtons>
            <StyledInput
              color={color[Math.floor(Math.random() * (color.length - 1))]}
              type="text"
              placeholder="Search by brand"
              onKeyDown={handleSearch}
            />
            <StyledButton
              color={color[Math.floor(Math.random() * (color.length - 1))]}
              onClick={handleToRow}
            >
              {row ? "Cards" : "Rows"}
            </StyledButton>
            <StyledButton
              disabled={number < arr.length ? false : true}
              color={color[Math.floor(Math.random() * (color.length - 1))]}
              onClick={handleMore}
            >
              Show more?
            </StyledButton>
            <StyledButton
              disabled={arr < 10 || number < 10 ? true : false}
              color={color[Math.floor(Math.random() * (color.length - 1))]}
              onClick={handleMore}
            >
              Show less?
            </StyledButton>
          </StateButtons>
        </StyledDiv>
      )}
      {row && (
        <StyledDivRow className="row">
          {arr.slice(0, Number(number)).map((el, index) => (
            <WorkContainerRow key={index} className="col-xl-4 col-sm-12">
              <div>
                <StyledImgRow src={`/Imgs/${el}`} />
              </div>
              <StyledEffectRow
                color={color[Math.floor(Math.random() * (color.length - 1))]}
              >
                {treatNames[index].toUpperCase()}
              </StyledEffectRow>
            </WorkContainerRow>
          ))}
          <StateButtons>
            <StyledInput
              color={color[Math.floor(Math.random() * (color.length - 1))]}
              type="text"
              placeholder="Search by brand"
              onKeyDown={handleSearch}
            />
            <StyledButton
              color={color[Math.floor(Math.random() * (color.length - 1))]}
              onClick={handleToRow}
            >
              {row ? "Cards" : "Rows"}
            </StyledButton>
            <StyledButton
              disabled={number < arr.length ? false : true}
              color={color[Math.floor(Math.random() * (color.length - 1))]}
              onClick={handleMore}
            >
              Show more?
            </StyledButton>
            <StyledButton
              disabled={arr < 10 || number < 10 ? true : false}
              color={color[Math.floor(Math.random() * (color.length - 1))]}
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
