import styled from 'styled-components';
import { VscClose } from 'react-icons/vsc';

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

  & .is-hidden {
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
  }
`;

export const StyledModal = styled.div`
  width: 541px;
  height: 752px;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);

  border-radius: 24px;
  background: #fff;
`;
export const StyledIconClose = styled.div`
  width: 30px;
  height: 30px;

  position: absolute;
  top: 5px;
  right: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledExitBtn = styled(VscClose)`
  width: ${({ theme }) => theme.spacing(7.4)};
  height: ${({ theme }) => theme.spacing(7.4)};
  &:hover {
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.4);
  }
`;
