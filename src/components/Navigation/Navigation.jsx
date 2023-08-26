import React from 'react';
import { NavLink } from 'react-router-dom';
import { NaivgLink } from './Navigation.styled';
import useAuth from 'hooks/useAuth';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NaivgLink to={'/'}>Home</NaivgLink>
      {isLoggedIn && <NaivgLink to={'/contacts'}>Contacts</NaivgLink>}
    </nav>
  );
};

export default Navigation;

// export const Navigation = () => {
//    const { isLoggedIn } = useAuth();

//    return (
//      <nav>
//        <NavLink className={css.link} to="/">
//          Home
//        </NavLink>
//        {isLoggedIn && (
//          <NavLink className={css.link} to="/tasks">
//            Tasks
//          </NavLink>
//        )}
//      </nav>
//    );
//  };
