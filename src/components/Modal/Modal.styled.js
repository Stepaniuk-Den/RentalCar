import styled from 'styled-components';
import { VscClose } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

export const BackDrop = styled.div`
  background: rgba(34, 13, 91, 0.23);
  backdrop-filter: blur(3.5px);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overscroll-behavior: contain;
  z-index: 10;
`;

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 461px;
  height: 672px;
  padding: 40px;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  border-radius: 24px;
  background: #fff;
  & .description {
    margin-top: 14px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px; /* 111.111% */
  }
  & .access-func,
  .rental-cond {
    margin-top: 24px;
    margin-bottom: 4px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px; /* 111.111% */
  }
  & .access,
  .func {
    display: flex;
    margin-top: 4px;
    color: rgba(18, 20, 23, 0.5);
    font-size: 12px;
    font-weight: 400;
    line-height: 18px; /* 150% */
  }
`;
export const StyledIconClose = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  &:hover {
  }
`;

export const StyledBtnClose = styled(VscClose)`
  width: 24px;
  height: 24px;
  transition: all 0.3s ease-in-out;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.4);
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.4);
  }
`;

export const StyledModalWrapper = styled.div`
  overflow: hidden;
  border-radius: 14px;
  background-color: #f3f3f2;
  & img {
    display: block;
    width: 461px;
    height: 248px;
    object-fit: cover;
  }
`;

export const StyledModalData = styled.div`
  margin-top: 14px;
  display: flex;
  flex-direction: row;
  gap: 6px;

  font-size: 18px;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
  & .model {
    color: #3470ff;
  }
`;

export const StyledModalDetail = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
  height: 40px;

  & p {
    display: flex;
    color: rgba(18, 20, 23, 0.5);
    font-size: 12px;
    font-weight: 400;
    line-height: 18px; /* 150% */
  }
`;

export const StyledConditions = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  & p {
    display: flex;
    padding: 7px 14px;
    justify-content: center;
    align-items: center;
    border-radius: 35px;
    background: #f9f9f9;
    color: #363535;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px; /* 150% */
    letter-spacing: -0.24px;
  }
  & span {
    color: #3470ff;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: -0.24px;
    padding-left: 4px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  width: 68px;
  padding: 12px 50px;
  margin-top: 24px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 12px;
  background-color: #3470ff;
  color: #fff;
  transition: all 0.3s ease-in-out;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  &:hover {
    background-color: #0b44cd;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2),
      0px 1px 5px 0px rgba(0, 0, 0, 0.14), 0px 2px 5px -1px rgba(0, 0, 0, 0.12);
  }
  &:active {
    scale: 0.95;
  }
`;
