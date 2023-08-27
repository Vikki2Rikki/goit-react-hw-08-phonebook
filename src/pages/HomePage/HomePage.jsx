import React from 'react';
import { Container, Title, Text } from './HomePage.styled';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Title>Welcome to your phone book!</Title>
      <Text>
        <Link to={'/register'}>Sign Up</Link> or{' '}
        <Link to={'/login'}>Log In</Link> for beginning.
      </Text>
    </Container>
  );
};

export default HomePage;
