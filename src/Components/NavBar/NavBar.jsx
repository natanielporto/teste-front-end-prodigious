import React, { useState } from 'react';
import logo from '../../Assets/logo_prodigious.svg';
import {
  StyledLi,
  StyledA,
  StyledLogo,
  Navbar,
  LiContainer,
  BurguerContainer,
} from './NavBar';
import { MenuItems } from '../MenuItems/MenuItems';
import Modal from '../Modal/Modal.jsx';

const NavBar = () => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <Navbar className='row'>
        <div className='col-6 d-flex justify-content-around'>
          <a href='/'>
            <StyledLogo src={logo} alt='Logo Prodigious' />
          </a>
        </div>
        <LiContainer className='col-6'>
          <ul className='d-flex align-items-center'>
            {MenuItems.map((el, index) => (
              <StyledLi key={index} color={el.color}>
                <StyledA href={el.url}>{el.title}</StyledA>
              </StyledLi>
            ))}
          </ul>
        </LiContainer>
        <BurguerContainer className='col-6'>
          <i
            onClick={handleModal}
            className={modal ? '' : 'fas fa-bars fa-2x'}
          ></i>
          {modal && <Modal open={modal} handleModal={handleModal} />}
        </BurguerContainer>
      </Navbar>
    </>
  );
};

export default NavBar;
