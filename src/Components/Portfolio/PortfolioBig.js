import styled from "styled-components";

export const StyledDiv = styled.div`
  padding: 0;
  margin: 0;
  height: 355px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    height: 120px;
    margin: 16px 0 9% 0;
    padding: 0;
    height: 100%;
  }
`;

export const WorkContainer = styled.div`
  width: 33.3%;
  background: black;
  margin: 0;
`;

export const StyledEffect = styled.div`
  height: 90px;
  margin: 0;
  width: 100%;
  display: flex;
  background: black;
  justify-content: space-around;
  align-items: center;
  height: 90px;
  -webkit-transition: height 1s;
  transition: height 1s;

  ${WorkContainer}:hover & {
    background-color: ${(props) => props.color};
    transition: 0.5s;
    height: 120px;

    @media (max-width: 768px) {
      height: 80px;
    }
  }

  @media (max-width: 768px) {
    height: 60px;
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

  ${WorkContainer}:hover & {
    transition: 0.5s;
    max-height: 325px;

    @media (max-width: 768px) {
      max-height: 180px;
    }
  }
`;

export const StyledButton = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 6px;
  margin-right: 16px;
  font-size: 1em;
  color: black;
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
