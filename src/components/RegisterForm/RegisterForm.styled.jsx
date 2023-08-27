import { styled } from 'styled-components';

export const WrapSignUpForm = styled.div`
  width: 300px;
  height: 500px;
  background-image: linear-gradient(#f3f3ab, yellow);
  border: 2px solid yellow;
  border-radius: 8px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 40px;
  padding-bottom: 40px;
  box-shadow: 18px 10px 32px 2px rgba(110, 110, 15, 0.75);
`;

export const WrapForm = styled.form`
  margin-top: 50px;
`;

export const InputWrap = styled.div`
  display: flex;
  margin-bottom: 70px;
  flex-direction: column;
`;

export const InputWrapper = styled.input`
  display: block;
  height: 30px;
  border-radius: 8px;
`;

export const BtnSubmit = styled.button`
  display: block;
  width: 100%;
  height: 30px;
  color: white;
  background-color: #0d00ff;
  padding: 6px 8px;
  margin: 0 auto;

  border-radius: 8px;
  border-color: transparent;
  &:hover {
    color: #0d00ff;
    background-color: white;
    border-color: #0d00ff;
  }
`;
