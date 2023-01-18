import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px;
  border-radius: 4px;
  text-decoration: none;
  color: #2a2a2a;
  transition: color 250ms linear, background-color 250ms linear;

  &.active {
    background-color: tomato;
    color: #ffffff;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: tomato;
  }
`;
