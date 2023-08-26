import React from 'react';
import { WrapLoginForm, InputWrap, BtnSubmit } from './LoginFom.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'store/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleLogin = evt => {
    evt.preventDefaulf();
    const form = evt.currentTarget;
    console.log('post');
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    console.log('post');
    form.reset();
  };

  return (
    <WrapLoginForm>
      <form onSubmit={handleLogin}>
        <InputWrap>
          <label htmlFor="exampleInputEmail">Email</label>
          <input
            type="email"
            name="email"
            // value={name}
            //onChange={handleInput}
            required
          />
        </InputWrap>
        <InputWrap>
          <label htmlFor="exampleInputPassword">Password</label>
          <input
            type="password"
            name="password"
            // value={password}
            //onChange={handleInput}
            required
          />
        </InputWrap>
        <BtnSubmit type="submit">Login</BtnSubmit>
      </form>
    </WrapLoginForm>
  );
};

export default LoginForm;
