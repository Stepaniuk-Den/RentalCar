import Loader from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledHeader, StyledMain } from './Layout.styled';

import Navigation from 'components/Navigation/Navigation';
import ScrollToTopButton from 'components/ScrollToTop/ScrollToTop';

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
        <ScrollToTopButton />
      </StyledMain>
    </>
  );
};

export default Layout;
