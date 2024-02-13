import { styled } from 'styled-components';

export const StyledForm = styled.form`
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
`;

export const StyledBtnSubmit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 34px;
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

export const styledSelectBrand = {
  option: styles => {
    return {
      ...styles,
      background: '#FFF',

      outline: 'none',
      height: '28px',

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
    outline: '1px solid #000',
    border: 'none',
    borderRadius: '12px',
    boxShadow: 'none',
    backgroundColor: '#FFF',
    width: '200px',
    height: '32px',

    margin: 'auto',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),

  singleValue: (styles, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return {
      ...styles,
      opacity,
      transition,
      right: 5,
      color: '#121417',

      fontSize: '18px',

      fontWeight: '500',
      lineHeight: '1.11',
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

      border: '1px solid rgba(18, 20, 23, 0.05)',

      boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)',
    };
  },
  menuList: styles => ({
    ...styles,
    '::-webkit-scrollbar': {},
  }),

  placeholder: () => {
    const transform = 'translateY(-50%)';
    return {
      position: 'absolute',
      left: 10,
      top: '10px',
      // top: '50%',
      transform,
      color: '#121417',

      fontSize: '16px',

      fontWeight: '500',
      lineHeight: '1',
    };
  },

  indicators: () => {
    return {
      cursor: 'pointer',
    };
  },

  dropdownIndicator: styles => {
    return {
      ...styles,
      size: '20px',
      color: '#121417;',
      '&:hover': {
        color: 'rgba(18, 20, 23, 1)',
      },
    };
  },

  input: styles => {
    return {
      ...styles,
      margin: '0px',
      color: '#121417',
      width: '100%',
    };
  },
};

export const styledSelectPrice = {
  option: styles => {
    return {
      ...styles,
      background: '#FFF',

      outline: 'none',
      height: '32px',

      fontSize: '16px',
      fontWeight: '500',
      color: 'rgba(18, 20, 23, 0.20)',

      cursor: 'pointer',
      '&:hover': {
        color: '#121417',
        fontWeight: '500',
      },
      textAlign: 'left',
    };
  },
  control: styles => ({
    ...styles,
    border: 'none',
    borderRadius: '14px',
    boxShadow: 'none',
    backgroundColor: '#F7F7FB',
    width: '125px',
    height: '48px',

    margin: 'auto',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),

  singleValue: (styles, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return {
      ...styles,
      opacity,
      transition,
      right: 5,
      color: '#121417',

      fontSize: '18px',

      fontWeight: '500',
      lineHeight: '1.11',
    };
  },

  menu: styles => {
    return {
      ...styles,
      background: '#FFF',
      borderRadius: '14px',
      display: 'inline-block',
      width: '224px',
      marginLeft: 'auto',
      marginRight: 'auto',

      border: '1px solid rgba(18, 20, 23, 0.05)',

      boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)',
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
      color: '#121417',

      fontSize: '18px',

      fontWeight: '500',
      lineHeight: '1.11',
    };
  },

  indicators: () => {
    return {
      cursor: 'pointer',
    };
  },

  dropdownIndicator: styles => {
    return {
      ...styles,
      size: '20px',
      color: '#121417;',
      '&:hover': {
        color: 'rgba(18, 20, 23, 1)',
      },
    };
  },

  input: styles => {
    return {
      ...styles,
      margin: '0px',
      color: '#121417',
      width: '100%',
    };
  },
};

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
