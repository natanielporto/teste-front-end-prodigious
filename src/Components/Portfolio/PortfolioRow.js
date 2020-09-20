import styled from 'styled-components';

export const StyledDivRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    margin: 16px 0 9% 0;
  }
`;

export const WorkContainerRow = styled.div`
  background: white;
  height: 100px;
  display: flex;
`;

export const StyledEffectRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  z-index: -1;
  overflow: hidden;
  width: 0px;
  font-weight: 900;
  font-size: 1.5em;
  -webkit-transition: width 1s;
  transition: width 1s;

  ${WorkContainerRow}:hover & {
    background: ${(props) => props.color};
    transition: 1s;
    width: 175%;
    z-index: 1;

    @media (max-width: 375px) {
      width: 250%;
    }
  }
`;

export const StyledImgRow = styled.img`
  object-fit: cover;
  height: 100px;
  width: 100%;
  background: ${(props) => props.color};
  -webkit-transition: max-width 1s;
  transition: max-width 1s;
`;
