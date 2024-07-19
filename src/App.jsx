import React, { Suspense, useEffect } from 'react';
import Nav from './components/nav/Nav.jsx';
import Loader from './components/Loader.jsx';
import { Outlet } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);

export default function App() {

  useEffect(() => {
    document.body.classList.add('w-[100vw]');
    document.body.classList.add('overflow-x-hidden');
  })

  return (
    <>
    <Nav />
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
    </>
  );
};
