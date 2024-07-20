import React, { Suspense, useEffect, useState } from 'react';
import Nav from './components/nav/Nav.jsx';
import Loader from './components/Loader.jsx';
import { Outlet } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { ProductDataProvider } from './contexts/ProductDataContext.jsx';

library.add(fas, fab);

export default function App() {

  // State for product data.
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    document.body.classList.add('w-[100vw]');
    document.body.classList.add('overflow-x-hidden');
  })

  return (
    <>
    <Nav />
    <ProductDataProvider values={{ productData, setProductData }}>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </ProductDataProvider>
    </>
  );
};
