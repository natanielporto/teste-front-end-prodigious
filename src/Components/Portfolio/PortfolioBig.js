import styled from 'styled-components';

export const StyledDiv = styled.div`
  padding: 0;
  margin: 0;
  min-height: 355px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    /* height: 120px; */
    height: 100%;
    margin: 16px 0 9% 0;
    padding: 0;
  }
`;

export const WorkContainer = styled.div`
  width: 33.3%;
  background: black;
  margin: 0;
`;

export const StyledEffect = styled.div`
  display: flex;
  flex-direction: column;
  height: 90px;
  margin: 0;
  width: 100%;
  display: flex;
  background: black;
  color: white;
  font-weight: 900;
  font-size: 1.5em;
  justify-content: space-around;
  align-items: center;
  height: 90px;
  z-index: 2;
  -webkit-transition: height 1s;
  transition: height 1s;
  position: relative;

  ${WorkContainer}:hover & {
    background-color: ${(props) => props.color};
    transition: 0.5s;
    height: 120px;

    @media (max-width: 768px) {
      height: 80px;
    }
  }

  &::after {
    content: '';
    width: 30px;
    height: 30px;
    position: absolute;
    transform: rotate(45deg) translateX(-50%);
    bottom: -20px;
    left: 50%;
    background-color: inherit;
    z-index: 1;

    @media (max-width: 768px) {
      height: 25px;
      width: 25px;
      bottom: -21px;
    }
  }

  @media (max-width: 768px) {
    height: 60px;
    overflow: hidden;
  }

  @media (max-width: 375px) {
    display: none;
  }
`;

export const StyledEffectBottom = styled.div`
  display: flex;
  height: 90px;
  margin: 0;
  width: 100%;
  display: flex;
  background: black;
  color: white;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  font-size: 1.5em;

  @media (min-width: 376px) {
    display: none;
  }

  ${WorkContainer}:hover & {
    background-color: ${(props) => props.color};
    transition: 0.5s;

    @media (max-width: 375px) {
      transition: none;
    }
  }
`;

export const StyledImg = styled.img`
  object-fit: none;
  width: 100%;
  max-height: 355px;
  -webkit-transition: max-height 1s;
  transition: max-height 1s;

  @media (max-width: 768px) {
    overflow: hidden;
    max-height: 200px;
  }

  @media (max-width: 375px) {
    max-height: 355px;
    -webkit-transition: none;
    transition: none;
  }

  ${WorkContainer}:hover & {
    transition: 0.5s;
    max-height: 325px;

    @media (max-width: 768px) {
      max-height: 180px;
    }

    @media (max-width: 375px) {
      max-height: 355px;
      -webkit-transition: none;
      transition: none;
    }
  }
`;

export const StyledButton = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 6px;
  margin-right: 16px;
  font-size: 1em;
  background: ${(props) => props.color};
  color: white;
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
  border: none;
  outline: none;

  &:focus {
    outline: none;
  }
`;

export const StateButtons = styled.div`
  position: fixed;
  bottom: 20px;
  outline: none;
  right: 0;
  z-index: 2;

  @media (max-width: 768px) {
    right: 10.5%;
    bottom: 1%;
  }

  @media (max-width: 375px) {
    display: none;
  }
`;

export const StyledI = styled.i`
  color: ${(props) => props.color};
  font-size: 1em;
  ${WorkContainer}:hover & {
    color: white;
  }
`;

export const StyledInput = styled.input`
  border: none;
  width: 85px;
  height: 50px;
  border-radius: 6px;
  margin-right: 16px;
  outline: none;
  font-size: 1em;
  padding: 16px;
  color: white;
  background-color: ${(props) => props.color};

  @media (max-width: 375px) {
    display: none;
  }

  &:hover {
    width: 250px;
    transition: 1s;
  }

  &:focus {
    width: 250px;
    transition: 1s;
    border: none;

    @media (max-width: 768px) {
      width: 85px;
    }
  }

  &::placeholder {
    text-align: center;
    color: white;
  }
`;

export const StyledMobileMoreDiv = styled.div`
  height: 120px;
  width: 100%;
  background: #08b7e2;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 376px) {
    display: none;
  }
`;

export const StyledMobileMoreBtn = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  font-size: 2em;
  @media (min-width: 376px) {
    display: none;
  }
`;

export const StyledMobileSearch = styled.input`
  border: none;
  height: 50px;
  border-radius: 6px;
  outline: none;
  font-size: 1.5em;
  padding: 0 20%;

  &::placeholder {
    color: #08b7e2;
    text-align: center;
  }

  &::focus {
    text-align: center;
  }
`;
