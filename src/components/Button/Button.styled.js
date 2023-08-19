import styled from 'styled-components';

export const StyledButton = styled.button`
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
      0px 1px 5px 0px rgba(0, 0, 0, 0.14), 0px 2px 5px -1px rgba(0, 0, 0, 0.12);
  }
  &:active {
    scale: 0.95;
  }
`;
