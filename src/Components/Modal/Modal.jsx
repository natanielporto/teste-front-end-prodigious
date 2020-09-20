import React from 'react';
import ReactDom from 'react-dom';
import { MenuItems } from '../MenuItems/MenuItems';
import { StyledA, StyledLinkContainer } from './Modal';
import './Modal.css';

const Modal = ({ open, handleModal }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className='overlay-prodigious' onClick={handleModal} />
      <div className='modal-prodigious'>
        <div className='d-flex justify-content-end m-4'>
          <i className='fas fa-times fa-3x' />
        </div>
        <StyledLinkContainer>
          <StyledA href='/'>HOME</StyledA>
        </StyledLinkContainer>
        <StyledLinkContainer>
          <StyledA href='/portfolio'>PORTFÓLIO</StyledA>
        </StyledLinkContainer>
        <StyledLinkContainer>
          <StyledA href='/contact'>CONTACT</StyledA>
        </StyledLinkContainer>
        <StyledLinkContainer>
          <StyledA href='/network'>NETWORK</StyledA>
        </StyledLinkContainer>
      </div>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
