import React from 'react';
import { Container } from './HomePage.styled';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  return (
    <Container>
      <Helmet>
        <title>Welcome to your phone book!</title>
      </Helmet>
    </Container>
  );
};

export default HomePage;
