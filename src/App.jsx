import React, { Suspense } from 'react';
import Nav from './components/Nav.jsx';
import Loader from './components/Loader.jsx';
import { Outlet } from 'react-router-dom';

export default function App() {

  return (
    <>
    <Nav />
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
    </>
  );
};
