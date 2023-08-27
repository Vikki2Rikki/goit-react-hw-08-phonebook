//import React, { useState } from 'react';
import { register } from 'store/auth/operations';
import { WrapLoginForm, InputWrap, BtnSubmit } from './RegisterForm.styled';
import { useDispatch } from 'react-redux';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <WrapLoginForm>
      <form onSubmit={handleSubmit}>
        <InputWrap>
          <label htmlFor="exampleInputName">Name</label>
          <input
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            //title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            //required
          />
        </InputWrap>
        <InputWrap>
          <label htmlFor="exampleInputEmail">Email</label>
          <input type="email" name="email" required />
        </InputWrap>
        <InputWrap>
          <label htmlFor="exampleInputPassword">Password</label>
          <input type="password" name="password" required />
        </InputWrap>
        <BtnSubmit type="submit">SignUp</BtnSubmit>
      </form>
    </WrapLoginForm>
  );
};
export default RegisterForm;
