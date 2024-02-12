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
  height: 34px;
  padding-left: 10px;
  border: 1px solid rgba(18, 20, 23, 0.5);
  border-radius: 20px;
  font-size: 12px;
  color: #707070;
  &:focus {
    outline: none;
  }
`;

export const StyledBtnSubmit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 34px;
  /* height: min-content; */
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

export const StyledInputLeft = styled.input`
  width: 100px;
  height: 30px;
  padding-right: 10px;
  text-align: right;
  border: 1px solid rgba(18, 20, 23, 0.5);
  border-right: none;
  border-radius: 20px 0 0 20px;
  font-size: 12px;
  color: #707070;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    background: #fff
      url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAKUlEQVQYlWNgwAT/sYhhKPiPT+F/LJgEsHv37v+EMGkmkuImoh2NoQAANlcun/q4OoYAAAAASUVORK5CYII=)
      no-repeat center center;
    width: 2em;
    border-right: 1px solid #bbb;
    opacity: 0.5; /* shows Spin Buttons per default (Chrome >= 39) */
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    margin: 0;
    cursor: pointer;
  }

  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
    cursor: pointer;
  }
`;

export const StyledInputRight = styled.input`
  position: relative;
  width: 100px;
  height: 30px;
  padding-left: 10px;
  border: 1px solid rgba(18, 20, 23, 0.5);
  border-radius: 0 20px 20px 0;
  font-size: 12px;
  color: #707070;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    background: #fff
      url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAKUlEQVQYlWNgwAT/sYhhKPiPT+F/LJgEsHv37v+EMGkmkuImoh2NoQAANlcun/q4OoYAAAAASUVORK5CYII=)
      no-repeat center center;
    width: 2em;
    border-left: 1px solid #bbb;
    opacity: 0.5; /* shows Spin Buttons per default (Chrome >= 39) */
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    cursor: pointer;
  }

  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
    cursor: pointer;
  }
`;
