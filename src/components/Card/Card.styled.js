import { styled } from 'styled-components';
import { GoHeart } from 'react-icons/go';
import { GoHeartFill } from 'react-icons/go';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 274px;
  position: relative;
  border-radius: 14px;
  transition: all 0.3s ease-in-out;

  & button {
    display: flex;
    width: 274px;
    padding: 12px 99px;
    margin-top: 28px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border: none;
    border-radius: 12px;
    background-color: #3470ff;
    color: #fff;
    transition: all 0.3s ease-in-out;
    font-size: 14px;
    /* font-weight: 600; */
    line-height: 20px; /* 142.857% */
    &:hover {
      background-color: #0b44cd;
      box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2),
        0px 1px 5px 0px rgba(0, 0, 0, 0.14),
        0px 2px 5px -1px rgba(0, 0, 0, 0.12);
    }
    &:active {
      scale: 0.95;
    }
  }

  &:hover .image {
    scale: 1.05;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2),
      0px 1px 5px 0px rgba(0, 0, 0, 0.14), 0px 2px 5px -1px rgba(0, 0, 0, 0.12);
  }
`;

export const StyledWrapper = styled.div`
  overflow: hidden;
  border-radius: 14px;
  background-color: #f3f3f2;
  transition: all 0.3s ease-in-out;
  & img {
    display: block;
    width: 274px;
    height: 268px;
    object-fit: cover;
  }
`;

export const StyledModelData = styled.div`
  margin-top: 14px;
  display: flex;
  flex-direction: row;
  gap: 6px;
  & .model {
    color: #3470ff;
  }
  & .rentalPrice {
    margin-left: auto;
  }
`;

export const StyledModelDetail = styled.div`
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

export const StyledHeartWrapper = styled.div`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
  &:hover {
  }
`;

export const StyledHeartIcon = styled(GoHeart)`
  width: 18px;
  height: 18px;
  color: rgba(255, 255, 255, 0.8);
`;
export const StyledHeartFillIcon = styled(GoHeartFill)`
  width: 18px;
  height: 18px;
  color: rgba(52, 112, 255, 1);
`;
