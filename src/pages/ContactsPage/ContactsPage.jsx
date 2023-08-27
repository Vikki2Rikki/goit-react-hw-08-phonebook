import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContactsTunk } from 'store/contacts/operations';
import { Container, MainTitle, SecondaryTitle } from './ContactsPage.styled';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsTunk());
  }, [dispatch]);

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default ContactsPage;
