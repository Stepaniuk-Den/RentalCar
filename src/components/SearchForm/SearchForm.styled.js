import { styled } from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px auto;
  gap: 20px;

  @media only screen and (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
  }
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
`;

export const StyledBtnSubmit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 38px;
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
`;

export const styledSelectBrand = {
  option: styles => {
    return {
      ...styles,
      background: '#FFF',

      outline: 'none',
      height: '24px',

      fontSize: '16px',
      fontWeight: '500',
      color: 'rgba(18, 20, 23, 0.50)',

      cursor: 'pointer',
      '&:hover': {
        color: '#3470ff',
        fontWeight: '500',
      },
      textAlign: 'left',
    };
  },

  control: styles => ({
    ...styles,
    cursor: 'pointer',
    border: '1px solid rgba(18, 20, 23, 0.2)',
    borderRadius: '12px',
    boxShadow: 'none',
    backgroundColor: '#FFF',
    width: '200px',
    height: '30px',
    padding: 0,
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),

  singleValue: (styles, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 250ms';

    return {
      ...styles,
      opacity,
      transition,
      color: '#3470ff',
      paddingLeft: 10,
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '1',
    };
  },

  menu: styles => {
    return {
      ...styles,
      background: '#FFF',
      borderRadius: '12px',
      display: 'inline-block',
      width: '200px',
      marginLeft: 'auto',
      marginRight: 'auto',
      top: 30,
      border: 'none',
      boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.2)',
    };
  },

  menuList: styles => ({
    ...styles,
    '::-webkit-scrollbar': {},
  }),

  placeholder: () => {
    return {
      position: 'absolute',
      left: 10,
      color: '#707070',
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '1',
    };
  },

  valueContainer: styles => ({ ...styles, padding: '0', margin: '0' }),
  indicatorSeparator: styles => ({
    ...styles,
    display: 'none',
  }),

  indicators: () => {
    return {
      cursor: 'pointer',
    };
  },

  dropdownIndicator: (styles, state) => {
    return {
      ...styles,
      transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
      size: '20px',
      color: '#707070',
      '&:hover': {
        color: '#3470ff',
      },
    };
  },

  input: styles => {
    return {
      ...styles,
      margin: '0',
      color: '#707070',
      width: '100%',
      paddingLeft: 10,
    };
  },
};

export const styledSelectPrice = {
  option: styles => {
    return {
      ...styles,
      background: '#FFF',

      outline: 'none',
      height: '24px',

      fontSize: '16px',
      fontWeight: '500',
      color: 'rgba(18, 20, 23, 0.20)',

      cursor: 'pointer',
      '&:hover': {
        color: '#3470ff',
        fontWeight: '500',
      },
      textAlign: 'left',
    };
  },
  control: styles => ({
    ...styles,
    cursor: 'pointer',
    border: '1px solid rgba(18, 20, 23, 0.2)',
    borderRadius: '12px',
    boxShadow: 'none',
    backgroundColor: '#FFF',
    width: '200px',
    height: '30px',
    padding: 0,
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),

  singleValue: (styles, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 250ms';

    return {
      ...styles,
      opacity,
      transition,
      color: '#3470ff',
      paddingLeft: 10,
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '1',
    };
  },

  menu: styles => {
    return {
      ...styles,
      background: '#FFF',
      borderRadius: '12px',
      display: 'inline-block',
      width: '200px',
      marginLeft: 'auto',
      marginRight: 'auto',
      border: 'none',
      boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.2)',
    };
  },
  menuList: styles => ({
    ...styles,
    '::-webkit-scrollbar': {},
  }),

  placeholder: () => {
    return {
      position: 'absolute',
      left: 10,
      color: '#707070',
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '1',
    };
  },

  valueContainer: styles => ({ ...styles, padding: '0', margin: '0' }),
  indicatorSeparator: styles => ({
    ...styles,
    display: 'none',
  }),

  indicators: () => {
    return {
      cursor: 'pointer',
    };
  },

  dropdownIndicator: (styles, state) => {
    return {
      ...styles,
      transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
      size: '20px',
      color: '#707070',
      '&:hover': {
        color: '#3470ff',
      },
    };
  },

  input: styles => {
    return {
      ...styles,
      margin: '0px',
      color: '#121417',
      width: '100%',
      paddingLeft: 10,
    };
  },
};

export const StyledInputLeft = styled.input`
  width: 100px;
  height: 34px;
  padding-right: 10px;
  text-align: right;
  border: 1px solid rgba(18, 20, 23, 0.2);
  border-right: none;
  border-radius: 12px 0 0 12px;
  font-size: 16px;
  color: #707070;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    background: #fff
      url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAKUlEQVQYlWNgwAT/sYhhKPiPT+F/LJgEsHv37v+EMGkmkuImoh2NoQAANlcun/q4OoYAAAAASUVORK5CYII=)
      no-repeat center center;
    width: 2em;
    /* border-right: 1px solid #bbb; */
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
  height: 34px;
  padding-left: 10px;
  border: 1px solid rgba(18, 20, 23, 0.2);
  border-radius: 0 12px 12px 0;
  font-size: 16px;
  color: #707070;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    background: #fff
      url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAKUlEQVQYlWNgwAT/sYhhKPiPT+F/LJgEsHv37v+EMGkmkuImoh2NoQAANlcun/q4OoYAAAAASUVORK5CYII=)
      no-repeat center center;
    width: 2em;
    /* border-left: 1px solid #bbb; */
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
