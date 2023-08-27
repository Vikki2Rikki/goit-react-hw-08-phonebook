import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 30px;
  margin-right: 25px;
`;

export const AuthNavLink = styled(NavLink)`
  color: yellow;
  &:hover {
    scale: 1.1;
  }
`;
