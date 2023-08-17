import { styled } from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 274px;
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
    scale: 1.1;
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
