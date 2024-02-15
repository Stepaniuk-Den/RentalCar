import React, { useState, useEffect } from 'react';
import { StyledArrowUp, StyledScrollToTopBtn } from './ScrollToTop.styled';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <StyledScrollToTopBtn onClick={scrollToTop}>
        <StyledArrowUp />
      </StyledScrollToTopBtn>
    )
  );
};

export default ScrollToTopButton;
