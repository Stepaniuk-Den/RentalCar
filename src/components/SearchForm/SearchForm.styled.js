import { styled } from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: row;
  margin: 20px auto;
  gap: 20px;
`;

export const StyledBrandContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & span {
    display: flex;
    width: 100%;
    height: 44px;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 12px;
  }

  &:hover {
    & span {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      border: none;
      border-radius: 12px;
      color: #fff;
      transition: all 0.3s ease-in-out;
      background-color: #0b44cd;
      box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2),
        0px 1px 5px 0px rgba(0, 0, 0, 0.14),
        0px 2px 5px -1px rgba(0, 0, 0, 0.12);
    }
  }
`;

export const StyledField = styled(Field)`
  display: flex;
  width: 200px;
  height: 30px;
  border: 1px solid rgba(18, 20, 23, 0.5);
  border-radius: 20px;
  /* control: styles => ({
    ...styles,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '18px',
    color: '#FBFBFB',
    border: 0,
    textAlign: 'left',
    height: '35px',
    padding: '8px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.60)',
    backgroundColor: 'transparent',
    boxShadow: 'none',

    cursor: 'pointer',
  }),
  menu: styles => ({
    ...styles,
    top: '90%',
    width: '100%',
    height: '300px',
    borderRadius: '8px',
    background: #FFF,
    backdropFilter: #FFF ,
    overflow: 'auto',
  }),
  menuList: styles => ({
    ...styles,
    width: '100%',
    height: '300px',
    '::-webkit-scrollbar': {
      width: '7px',
      height: '0px',
      borderRadius: '8px',
    },
    '::-webkit-scrollbar-track': {
      backgroundColor: 'rgba(255, 255, 255, 0.10)',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: '#734AEF',
    },
    '::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#623F8B',
    },
  }), */
`;
