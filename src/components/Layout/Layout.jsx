import Loader from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledHeader, StyledMain } from './Layout.styled';

import Navigation from 'components/Navigation/Navigation';

const Layout = () => {
  return (
    <>
      <StyledHeader>
        <Navigation />
      </StyledHeader>
      <StyledMain>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </StyledMain>
    </>
  );
};

export default Layout;
