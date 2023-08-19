import React from 'react';
import { StyledHome } from './HomePage.styled';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const HomePage = () => {
  return (
    <StyledHome data-aos="fade-right" data-aos-duration="3000">
      <h1>Rental Car</h1>
    </StyledHome>
  );
};

export default HomePage;
