import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: row;
`;
export const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  padding: 5px 10px;
  border: 1px solid transparent;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  color: rgb(46, 116, 203);

  &.active {
    background-color: #3470ff;
    color: #ffffff;
  }
  &:hover {
    scale: 1.1;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2),
      0px 1px 5px 0px rgba(0, 0, 0, 0.14), 0px 2px 5px -1px rgba(0, 0, 0, 0.12);
  }
`;

export const StyledUser = styled.div`
  display: flex;
  gap: 10px;
  justify-content: end;
`;
