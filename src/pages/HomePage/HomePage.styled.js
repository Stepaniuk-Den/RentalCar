import { styled } from 'styled-components';
import backgroundImg from '../../img/rentCar.png';

export const StyledHome = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vh;
  height: 90vh;
  margin: 20px auto 0;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
