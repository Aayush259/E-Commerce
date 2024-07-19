import React, { Suspense } from 'react';
import Nav from './components/Nav.jsx';
import Loader from './components/Loader.jsx';
import { Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);

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
