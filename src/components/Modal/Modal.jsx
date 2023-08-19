import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  BackDrop,
  StyledBtnClose,
  StyledConditions,
  StyledIconClose,
  StyledLink,
  StyledModal,
  StyledModalData,
  StyledModalDetail,
  StyledModalWrapper,
} from './Modal.styled';
import { closeModal } from 'redux/modalSlice';
import { selectIsOpen, selectModalData } from 'redux/selectors';

const modal = document.getElementById('modal');

const Modal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsOpen);
  const modalData = useSelector(selectModalData);
  useEffect(() => {
    if (!isOpen) return;

    const onCloseEsc = evt => {
      if (evt.code === 'Escape') {
        dispatch(closeModal());
      }
    };
    window.addEventListener('keydown', onCloseEsc);
    return () => {
      window.removeEventListener('keydown', onCloseEsc);
    };
  }, [dispatch, isOpen]);

  const onCloseClick = evt => {
    if (evt.currentTarget === evt.target) {
      dispatch(closeModal());
    }
  };
  const handleCloseBtn = () => {
    dispatch(closeModal());
  };
  const address = modalData.address.split(',');
  const rentalCond = modalData.rentalConditions.split('\n');
  const age = rentalCond[0].split(':');
  const mileageNum = modalData.mileage.toLocaleString('us-US');
  const price = modalData.rentalPrice.substring(1);

  return createPortal(
    <BackDrop onClick={onCloseClick}>
      <StyledModal>
        <StyledModalWrapper>
          <img src={modalData.img} alt={modalData.make} />
        </StyledModalWrapper>
        <StyledModalData>
          <p>{modalData.make}</p>
          <p className="model">{modalData.model},</p>
          <p>{modalData.year}</p>
        </StyledModalData>
        <StyledModalDetail>
          <p>
            {address[1]} | {address[2]} | Id: {modalData.id} | Year:{' '}
            {modalData.year} | Type: {modalData.type}
            <br />
            Fuel Consumption: {modalData.fuelConsumption} | Engine Size:{' '}
            {modalData.engineSize}
          </p>
        </StyledModalDetail>
        <p className="description">{modalData.description}</p>
        <p className="access-func">Accessories and functionalities:</p>
        <p className="access">
          {modalData.accessories[0]} | {modalData.accessories[1]} |{' '}
          {modalData.accessories[2]}
        </p>
        <p className="func">
          {modalData.functionalities[0]} | {modalData.functionalities[1]} |{' '}
          {modalData.functionalities[2]}
        </p>
        <p className="rental-cond">Rental Conditions:</p>
        <StyledConditions>
          <p>
            {age[0]}: <span>{age[1]}</span>
          </p>
          <p>{rentalCond[1]}</p>
          <p>{rentalCond[2]}</p>
          <p>
            Mileage: <span>{mileageNum}</span>
          </p>
          <p>
            Price: <span>{price}$</span>
          </p>
        </StyledConditions>
        <StyledLink to="tel:+380730000000">Rental car</StyledLink>
        <StyledIconClose onClick={handleCloseBtn}>
          <StyledBtnClose />
        </StyledIconClose>
      </StyledModal>
    </BackDrop>,
    modal
  );
};

export default Modal;
