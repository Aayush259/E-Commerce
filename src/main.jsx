import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from './App.jsx';
import Home from './components/home/Home.jsx';
import './index.css';
import Product from './components/products/Products.jsx';
import ProductDetail from './components/products/ProductDetail.jsx';
import Cart from './components/cart/Cart.jsx';
import Wishlist from './components/wishlist/Wishlist.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='/products' element={<Product />} />
      <Route path='/products/:productname' element={<ProductDetail />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/wishlist' element={<Wishlist />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);
