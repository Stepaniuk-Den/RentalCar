import Loader from 'components/Loader/Loader';
import React, { Suspense } from 'react';
// import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { StyledHeader } from './Layout.styled';

import Navigation from 'components/Navigation/Navigation';

const Layout = () => {
  return (
    <>
      <StyledHeader>
        <Navigation />
      </StyledHeader>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

// Layout.propTypes = {
//   handleLogout: PropTypes.func.isRequired,
// };

export default Layout;
