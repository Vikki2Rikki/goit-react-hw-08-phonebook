import React, { useState } from 'react';
import {
  BtnSubmit,
  FormContainer,
  Input,
  WrapInput,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'store/contacts/selectors';
import { createNewContactThunk } from 'store/contacts/operations';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleInput = ({ target: { name, value } }) => {
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const addContactHandle = evt => {
    evt.preventDefault();
    const createContact = {
      name: name,
      number: number,
    };
    console.log('createContact', createContact);
    const isContact = contacts.find(
      contact => contact.name === createContact.name
    );
    !isContact
      ? dispatch(createNewContactThunk(createContact))
      : alert(`${createContact.name} is already in contacts.`);

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormContainer>
      <form className="form" onSubmit={addContactHandle}>
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
            name="number"
            value={number}
            onChange={handleInput}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </WrapInput>
        <BtnSubmit type="submit">Add contact</BtnSubmit>
      </form>
    </FormContainer>
  );
};

export default ContactForm;
