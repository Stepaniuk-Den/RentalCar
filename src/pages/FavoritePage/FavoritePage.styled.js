import { StyledButton } from 'components/Button/Button.styled';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import backgroundOopsImg from '../../img/oops.png';

export const StyledOops = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vh;
  height: 80vh;
  margin: 20px auto 0;
  background-image: url(${backgroundOopsImg});
  background-repeat: no-repeat;
`;

export const StyledCatalog = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin: 50px auto 100px auto;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoadButton = styled(StyledButton)`
  margin: 0 auto;
  width: 120px;
  padding: 12px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  width: 200px;
  padding: 12px 12px;
  margin-top: 24px;
  margin: auto;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 12px;
  background-color: #3470ff;
  color: #fff;
  transition: all 0.3s ease-in-out;
  font-size: 14px;
  font-weight: 600;
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
