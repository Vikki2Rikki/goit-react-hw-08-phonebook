import { styled } from 'styled-components';

export const ItemWrap = styled.div`
  width: 400px;
  margin: 0 auto;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: space-between;
`;
export const DeleteBtn = styled.button`
  background-color: blue;
  color: white;
  border-color: transparent;
  border-radius: 6px;
  &:hover {
    background-color: white;
    color: red;
  }
`;

export const ItemText = styled.p`
  display: flex;
  margin: 0;
  gap: 35px;
  font-weight: 500;
  font-size: 18px;
  color: blue;
`;
