import { styled } from 'styled-components';

export const WrapLoginForm = styled.div`
  width: 300px;
  height: 400px;
  background-color: bisque;
  border: 1px solid blue;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 40px;
  padding-bottom: 20px;
`;

export const InputWrap = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;

export const BtnSubmit = styled.button`
  width: 100%;
  color: white;
  background-color: #0d00ff;
  padding: 6px 8px;
  margin: 0 auto;
  /* margin-bottom: 20px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto; */
  border-radius: 4px;
  border-color: transparent;
  &:hover {
    color: #0d00ff;
    background-color: white;
    border-color: #0d00ff;
  }
`;
