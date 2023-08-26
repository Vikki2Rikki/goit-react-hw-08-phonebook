import React, { useState } from 'react';
import {
  BtnSubmit,
  FormContainer,
  Input,
  WrapInput,
} from './ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleInput = ({ target: { name, value } }) => {
    if (name === 'name') setName(value);
    if (name === 'phone') setPhone(value);
  };

  const addContactHandle = () => {};

  return (
    <FormContainer>
      <form className="form" onClick={evt => evt.preventDefault()}>
        <WrapInput>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </WrapInput>
        <WrapInput>
          <label htmlFor="exampleInputNumber" className="form-label">
            Phone number
          </label>
          <Input
            type="tel"
            name="phone"
            value={phone}
            onChange={handleInput}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </WrapInput>
        <BtnSubmit type="submit" onClick={() => addContactHandle()}>
          Add contact
        </BtnSubmit>
      </form>
    </FormContainer>
  );
};

export default ContactForm;
