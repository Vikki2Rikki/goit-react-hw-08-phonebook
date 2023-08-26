import React from 'react';
import { DeleteBtn, ItemText, ItemWrap } from './ContactItem.styled';

const ContactItem = () => {
  return (
    <ItemWrap>
      <ItemText>
        <p>Name </p>
        <p> Phone</p>
      </ItemText>
      <DeleteBtn>X</DeleteBtn>
    </ItemWrap>
  );
};

export default ContactItem;
