import React from 'react';
//import { NavLink } from 'react-router-dom';
import { Container, AuthNavLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Container>
      <AuthNavLink to={'/register'}>Register</AuthNavLink>
      <AuthNavLink to={'/login'}>Login</AuthNavLink>
    </Container>
  );
};

export default AuthNav;
