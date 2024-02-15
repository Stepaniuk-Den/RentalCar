import React from 'react';
import { useSelector } from 'react-redux';

import {
  StyledNavLink,
  StyledNavPage,
  StyledNavigation,
} from './Navigation.styled';
import { selectCarData } from 'redux/selectors';

const Navigation = () => {
  const carData = useSelector(selectCarData);
  return (
    <div>
      <StyledNavigation>
        <StyledNavLink to="/">Home</StyledNavLink>
        {carData && (
          <StyledNavPage>
            <StyledNavLink to="/catalog">Catalog</StyledNavLink>
            <StyledNavLink to="/favorites">Favorite</StyledNavLink>
          </StyledNavPage>
        )}
      </StyledNavigation>
    </div>
  );
};

export default Navigation;
