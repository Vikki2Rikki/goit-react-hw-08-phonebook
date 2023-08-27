import RegisterForm from 'components/RegisterForm/RegisterForm';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from './RegisterPage.styled';

const RegisterPage = () => {
  return (
    <Container>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </Container>
  );
};

export default RegisterPage;
