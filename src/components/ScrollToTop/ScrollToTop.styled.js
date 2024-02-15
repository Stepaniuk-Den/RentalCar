import styled from 'styled-components';
import { FaArrowAltCircleUp } from 'react-icons/fa';

export const StyledScrollToTopBtn = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 50%;

  cursor: pointer;

  z-index: 7;
  scale: 1;
  opacity: 0.5;
  transition: opacity 300ms linear, scale 300ms linear;

  &:hover,
  :focus {
    scale: 1.1;
    opacity: 1;
    transition: opacity 300ms linear, scale 300ms linear;
  }
`;

export const StyledArrowUp = styled(FaArrowAltCircleUp)`
  width: 100%;
  height: 100%;
`;
