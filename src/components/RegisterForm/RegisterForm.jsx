//import React, { useState } from 'react';
import { register } from 'store/auth/operations';
import {
  WrapSignUpForm,
  WrapForm,
  InputWrap,
  InputWrapper,
  BtnSubmit,
} from './RegisterForm.styled';
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
    <WrapSignUpForm>
      <WrapForm onSubmit={handleSubmit}>
        <InputWrap>
          <label htmlFor="exampleInputName">Name</label>
          <InputWrapper
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            //title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            //required
          />
        </InputWrap>
        <InputWrap>
          <label htmlFor="exampleInputEmail">Email</label>
          <InputWrapper type="email" name="email" required />
        </InputWrap>
        <InputWrap>
          <label htmlFor="exampleInputPassword">Password</label>
          <InputWrapper type="password" name="password" required />
        </InputWrap>
        <BtnSubmit type="submit">SignUp</BtnSubmit>
      </WrapForm>
    </WrapSignUpForm>
  );
};
export default RegisterForm;
