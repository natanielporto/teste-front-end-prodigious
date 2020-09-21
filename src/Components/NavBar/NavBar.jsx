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
import Modal from '../Modal/Modal.jsx';

const MenuItems = [
  {
    title: 'About',
    color: '#81BC41',
  },
  {
    title: 'Portfolio',
    color: '#F68720',
  },
  {
    title: 'Contact us',
    color: '#EE2F3D',
  },
  {
    title: 'Our Network',
    color: '#572185',
  },
];

const NavBar = () => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <Navbar className='row'>
        <div className='col-6 d-flex justify-content-around'>
          <StyledLogo src={logo} alt='Logo Prodigious' />
        </div>
        <LiContainer className='col-6'>
          <ul className='d-flex align-items-center'>
            {MenuItems.map((el, index) => (
              <StyledLi key={index} color={el.color}>
                <StyledA>{el.title}</StyledA>
              </StyledLi>
            ))}
          </ul>
        </LiContainer>
        <BurguerContainer className='col-6'>
          <i
            onClick={handleModal}
            className={modal ? '' : 'fas fa-bars fa-2x'}
          ></i>
          {modal && (
            <Modal type={'hamb'} open={modal} handleModal={handleModal} />
          )}
        </BurguerContainer>
      </Navbar>
    </>
  );
};

export default NavBar;
