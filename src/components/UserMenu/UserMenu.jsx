import useAuth from 'hooks/useAuth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'store/auth/operations';
import { Container, LogoutBtn } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Container>
      <p>Welcome, {user.name}!</p>
      <LogoutBtn onClick={handleLogOut}>Logout</LogoutBtn>
    </Container>
  );
};

export default UserMenu;
