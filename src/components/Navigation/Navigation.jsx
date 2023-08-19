// import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
// import PropTypes from 'prop-types';
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
        {carData ? (
          <StyledNavPage>
            <StyledNavLink to="/catalog">Catalog</StyledNavLink>
            <StyledNavLink to="/favorites">Favorite</StyledNavLink>
            {/* <UserMenu handleLogout={handleLogout} /> */}
          </StyledNavPage>
        ) : (
          <>
            {/* <StyledNavLink to="/login">Login</StyledNavLink>
            <StyledNavLink to="/register">Register</StyledNavLink> */}
          </>
        )}
      </StyledNavigation>
    </div>
  );
};

// Navigation.propTypes = {
//   handleLogout: PropTypes.func.isRequired,
// };

export default Navigation;
