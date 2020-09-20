import React, { useState } from 'react';
import { imgs } from './Imgs';
import { data } from './Data';
// import { randomColor } from '../Util';
import {
  StyledEffect,
  StyledEffectBottom,
  StyledImg,
  StyledDiv,
  StyledI,
  WorkContainer,
  StyledButton,
  StateButtons,
  StyledInput,
  StyledMobileMoreDiv,
  StyledMobileMoreBtn,
  StyledMobileSearch,
} from './PortfolioBig';
import {
  StyledEffectRow,
  StyledImgRow,
  StyledDivRow,
  WorkContainerRow,
} from './PortfolioRow';

const Portfolio = () => {
  const [names, setNames] = useState(data);
  const [arr, setArr] = useState(imgs);
  const [number, setNumber] = useState(19);
  const [row, setRow] = useState(false);

  const treatNames = names.map((el) => el.split('.')).map((el) => el[0]);

  const handleMore = ({ target }) => {
    if (target.innerText === 'MORE?') {
      if (number <= arr.length) setNumber(number + 10);
    } else {
      if (number < 0) setNumber(0);
      if (number > 0) setNumber(number - 10);
    }
  };

  const color = ['#81BC41', '#F68720', '#EE2F3D', '#572185', '#1380A5'];

  const randomColor = () =>
    color[Math.floor(Math.random() * (color.length - 1))];

  const handleToRow = () => {
    setRow(!row);
    row ? console.log('true') : console.log('false');
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
        <StyledDiv className='row'>
          {arr.slice(0, Number(number)).map((el, index) => (
            <WorkContainer
              className='col-lg-4 col-md-6 col-12 m-0 p-0'
              key={index}
            >
              <StyledEffect color={randomColor()}>
                {treatNames[index].toUpperCase()}
              </StyledEffect>
              <StyledImg
                src={`/Imgs/${el}`}
                alt={`Image from the ${treatNames[
                  index
                ].toUpperCase()} campaign.`}
              />
              <StyledEffectBottom color={randomColor()}>
                {treatNames[index].toUpperCase()}
                <StyledI className='fas fa-plus' color={randomColor()} />
              </StyledEffectBottom>
            </WorkContainer>
          ))}
          <StateButtons>
            <StyledInput
              color={randomColor()}
              type='text'
              placeholder='Search by brand'
              onKeyDown={handleSearch}
            />
            <StyledButton color={randomColor()} onClick={handleToRow}>
              {row ? 'CARDS' : 'ROWS'}
            </StyledButton>
            <StyledButton
              disabled={number < arr.length ? false : true}
              color={randomColor()}
              onClick={handleMore}
            >
              MORE?
            </StyledButton>
            <StyledButton
              disabled={arr < 10 || number < 10 ? true : false}
              color={randomColor()}
              onClick={handleMore}
            >
              LESS?
            </StyledButton>
          </StateButtons>
          <StyledMobileMoreDiv className='row'>
            <StyledMobileMoreBtn onClick={handleMore} className='col-6 p-0'>
              MORE?
              <StyledI className='fas fa-chevron-down ' />
            </StyledMobileMoreBtn>
            <StyledMobileMoreBtn onClick={handleMore} className='col-6 p-0'>
              LESS?
              <StyledI className='fas fa-chevron-up ' />
            </StyledMobileMoreBtn>
            <StyledMobileSearch
              color={randomColor()}
              type='text'
              placeholder='Search by brand'
              onKeyDown={handleSearch}
              className='col-11'
            />
          </StyledMobileMoreDiv>
        </StyledDiv>
      )}
      {row && (
        <StyledDivRow className='row'>
          {arr.slice(0, Number(number)).map((el, index) => (
            <WorkContainerRow key={index} className='col-xl-4 col-sm-12 p-0'>
              <div>
                <StyledImgRow src={`/Imgs/${el}`} />
              </div>
              <StyledEffectRow color={randomColor()}>
                {treatNames[index].toUpperCase()}
              </StyledEffectRow>
            </WorkContainerRow>
          ))}
          <StateButtons>
            <StyledInput
              color={randomColor()}
              type='text'
              placeholder='Search by brand'
              onKeyDown={handleSearch}
            />
            <StyledButton color={randomColor()} onClick={handleToRow}>
              {row ? 'CARDS' : 'ROWS'}
            </StyledButton>
            <StyledButton
              disabled={number < arr.length ? false : true}
              color={randomColor()}
              onClick={handleMore}
            >
              MORE?
            </StyledButton>
            <StyledButton
              disabled={arr < 10 || number < 10 ? true : false}
              color={randomColor()}
              onClick={handleMore}
            >
              LESS?
            </StyledButton>
          </StateButtons>
        </StyledDivRow>
      )}
    </div>
  );
};

export default Portfolio;
