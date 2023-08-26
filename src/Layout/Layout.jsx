import AppBar from 'components/AppBar/AppBar';
import React from 'react';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};

export default Layout;
