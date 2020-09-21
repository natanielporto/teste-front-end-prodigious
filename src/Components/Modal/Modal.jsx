import React from 'react';
import ReactDom from 'react-dom';
import { StyledSpan, StyledLinkContainer } from './Modal';
import './Modal.css';

const btns = ['HOME', 'ABOUT', 'PORTFOLIO', 'CONTACT', 'NETWORK'];

const Modal = ({ open, handleModal, type }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      {type === 'hamb' && (
        <>
          <div className='overlay-prodigious' onClick={handleModal} />
          <div className='modal-prodigious'>
            <div className='d-flex justify-content-end m-4'>
              <i className='fas fa-times fa-3x' onClick={handleModal} />
            </div>
            {btns.map((el, index) => (
              <StyledLinkContainer key={index}>
                <StyledSpan>{el}</StyledSpan>
              </StyledLinkContainer>
            ))}
          </div>
        </>
      )}
      {type === 'cont' && (
        <>
          <div className='overlay-prodigious-white' onClick={handleModal} />
          <div className='modal-prodigious-white'>
            <div className='d-flex justify-content-end m-4'>
              <i className='fas fa-times fa-3x green' onClick={handleModal} />
            </div>
            <p className='text-thanks'>Thank you for getting in touch.</p>
            <p className='text-thanks green'>Have a great day!</p>
          </div>
        </>
      )}
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
