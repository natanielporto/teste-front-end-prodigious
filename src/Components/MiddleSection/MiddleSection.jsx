import React, { useState } from 'react';
import {
  StyledContainerTop,
  StyledIdleContainerTop,
  StyledContainerBottom,
  StyledBig,
  StyledSmall,
} from './MiddleSection';
import About from '../About/About.jsx';
import Portfolio from '../Portfolio/Portfolio.jsx';
import Contact from '../Contact/Contact.jsx';
import Network from '../Network/Network.jsx';
import SectionTabs from '../SectionTabs/SectionTabs.jsx';

const MiddleSection = () => {
  const btns = [
    { id: 1, name: '\\ About' },
    { id: 2, name: '\\ Portfolio' },
    { id: 3, name: '\\ Contact us' },
    { id: 4, name: '\\ Our Network' },
  ];

  const [isOpen, setOpen] = useState(null);

  const handleCheck = ({ target }) => {
    const changeTo = target.innerText;
    changeTo === isOpen ? setOpen(null) : setOpen(changeTo);
  };

  return (
    <>
      {/* Renders if bigget than celphone mode */}
      <StyledBig>
        {isOpen === null && (
          <StyledIdleContainerTop color='black'>
            {btns.map((el) => (
              <SectionTabs
                key={el.id}
                name={el.name}
                handleCheck={handleCheck}
              />
            ))}
          </StyledIdleContainerTop>
        )}
        {isOpen !== null && (
          <StyledContainerTop color='black'>
            {btns.map((el) => (
              <SectionTabs
                key={el.id}
                name={el.name}
                handleCheck={handleCheck}
                className='col-md-6 col-lg-3'
              />
            ))}
          </StyledContainerTop>
        )}
        <StyledContainerBottom>
          {isOpen === '\\ About' && <About />}
          {isOpen === '\\ Portfolio' && <Portfolio />}
          {isOpen === '\\ Contact us' && <Contact />}
          {isOpen === '\\ Our Network' && <Network />}
        </StyledContainerBottom>
      </StyledBig>

      {/* Renders when in celphone mode */}
      <StyledSmall>
        <StyledContainerTop>
          <SectionTabs
            handleCheck={handleCheck}
            name='\ About'
            className='col-md-6 col-lg-3'
          />
          {isOpen === '\\ About' && <About />}
          <SectionTabs
            handleCheck={handleCheck}
            name='\ Portfolio'
            className='col-md-6 col-lg-3'
          />
          {isOpen === '\\ Portfolio' && <Portfolio />}
          <SectionTabs
            handleCheck={handleCheck}
            name='\ Contact us'
            className='col-md-6 col-lg-3'
          />
          {isOpen === '\\ Contact us' && <Contact />}
          <SectionTabs
            handleCheck={handleCheck}
            name='\ Our Network'
            className='col-md-6 col-lg-3'
          />
          {isOpen === '\\ Our Network' && <Network />}
        </StyledContainerTop>
      </StyledSmall>
    </>
  );
};

export default MiddleSection;
