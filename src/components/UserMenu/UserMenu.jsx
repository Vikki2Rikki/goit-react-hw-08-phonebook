import useAuth from 'hooks/useAuth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'store/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};

export default UserMenu;
