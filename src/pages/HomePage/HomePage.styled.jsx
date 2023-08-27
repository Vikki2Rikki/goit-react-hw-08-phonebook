import { styled } from 'styled-components';
export const Container = styled.div`
  min-height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(blue, yellow);
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 48px;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 28px;
`;
