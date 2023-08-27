import ContactListItem from 'components/ContactIistItem/ContactIistItem';

import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from 'store/contacts/selectors';
import { selectFilter } from 'store/filter/filterSelectors';

function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filtredContact = () =>
    filter
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;

  return (
    <ul>
      {contacts &&
        filtredContact().map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
    </ul>
  );
}

export default ContactList;
