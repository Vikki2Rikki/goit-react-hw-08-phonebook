import React from 'react';
import { DeleteBtn, ItemText, ItemWrap } from './ContactIistItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'store/contacts/operations';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <ItemWrap>
      <ItemText>
        <p>{contact.name} </p>
        <p>{contact.number}</p>
      </ItemText>
      <DeleteBtn onClick={() => dispatch(deleteContactThunk(contact.id))}>
        X
      </DeleteBtn>
    </ItemWrap>
  );
};

export default ContactListItem;
