import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { BackDrop, StyledIconClose, StyledModal } from './Modal.styled';

const modal = document.getElementById('modal');

const Modal = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const onCloseEsc = evt => {
      if (evt.code === 'Escape') {
        dispatch(modalReducer());
      }
    };
    window.addEventListener('keydown', onCloseEsc);
    return () => {
      window.removeEventListener('keydown', onCloseEsc);
    };
  }, [dispatch, modalReducer()]);

  const onCloseClick = evt => {
    if (evt.currentTarget === evt.target) {
      dispatch(modalReducer());
    }
  };
  const handleCloseBtn = () => {
    dispatch(modalReducer());
  };

  return createPortal(
    <BackDrop onClick={onCloseClick}>
      <StyledModal>
        <StyledIconClose onClick={handleCloseBtn}>
          <StyledExitBtn />
        </StyledIconClose>
      </StyledModal>
    </BackDrop>,
    modal
  );
};

export default Modal;
