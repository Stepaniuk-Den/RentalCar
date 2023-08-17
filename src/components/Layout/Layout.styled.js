import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  /* justify-content: start; */
  padding: 10px 0 10px 48px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2),
    0px 1px 5px 0px rgba(0, 0, 0, 0.14), 0px 2px 5px -1px rgba(0, 0, 0, 0.12);
  & nav {
    display: flex;
    gap: 10px;
    text-decoration: none;
  }
`;
export const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  padding: 5px 10px;
  border: 1px solid transparent;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;

  &.active {
    background-color: #afffff;
    color: #000000;
  }
  &:hover {
    scale: 1.1;
    color: #000000;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2),
      0px 1px 5px 0px rgba(0, 0, 0, 0.14), 0px 2px 5px -1px rgba(0, 0, 0, 0.12);
  }
`;
