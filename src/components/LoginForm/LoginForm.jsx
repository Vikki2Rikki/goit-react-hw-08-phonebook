//import React from 'react';
import {
  WrapLoginForm,
  WrapForm,
  InputWrap,
  InputWrapper,
  BtnSubmit,
} from './LoginFom.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'store/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleLogin = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <WrapLoginForm>
      <WrapForm onSubmit={handleLogin}>
        <InputWrap>
          <label htmlFor="exampleInputEmail">Email</label>
          <InputWrapper
            type="email"
            name="email"
            // value={name}
            //onChange={handleInput}
            required
          />
        </InputWrap>
        <InputWrap>
          <label htmlFor="exampleInputPassword">Password</label>
          <InputWrapper
            type="password"
            name="password"
            // value={password}
            //onChange={handleInput}
            required
          />
        </InputWrap>
        <BtnSubmit type="submit">Login</BtnSubmit>
      </WrapForm>
    </WrapLoginForm>
  );
};

export default LoginForm;
