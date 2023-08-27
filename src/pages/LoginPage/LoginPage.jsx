import LoginForm from 'components/LoginForm/LoginForm';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from './LoginPage.styled';

const LoginPage = () => {
  return (
    <Container>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <LoginForm />
    </Container>
  );
};

export default LoginPage;
