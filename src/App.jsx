import React, { Suspense, useEffect, useState } from 'react';
import Nav from './components/nav/Nav.jsx';
import Loader from './components/Loader.jsx';
import { Outlet } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { useDispatch } from 'react-redux';
import { addProducts } from './features/product/productSlice.js';

library.add(fas, fab);

export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {

    fetch('/E-Commerce/data.json')
      .then(response => response.json())
      .then(data => dispatch(addProducts(data)))
      .catch(err => console.log(err))

  }, []);

  useEffect(() => {
    document.body.classList.add('w-[100vw]');
    document.body.classList.add('overflow-x-hidden');
  }, []);

  return (
    <>
      <Nav />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
