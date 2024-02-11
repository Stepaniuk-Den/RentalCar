import { styled } from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px auto;
  gap: 20px;
`;

export const StyledBrandContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledRangeContainer = styled.div`
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
`;

export const StyledBtnSubmit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: min-content;
  padding: 5px 10px;
  margin-top: auto;
  border-radius: 12px;
  border: none;
  background-color: #3470ff;
  color: #fff;
  transition: all 0.3s ease-in-out;
  font-size: 16px;

  &:hover {
    background-color: #0b44cd;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2),
      0px 1px 5px 0px rgba(0, 0, 0, 0.14), 0px 2px 5px -1px rgba(0, 0, 0, 0.12);
    scale: 1.1;
  }
`;

export const StyledRangeLabel = styled.label`
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
  }
`;
