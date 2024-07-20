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
import Account from './components/account/Account.jsx';
import Login from './components/login/Login.jsx';
import Profile from './components/account/Profile.jsx';
import Address from './components/account/Address.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/E-Commerce" element={<App />}>
      <Route index element={<Home />} />
      <Route path="products" element={<Product />} />
      <Route path="products/category/:categoryname" element={<Product />} />
      <Route path="products/productName/:productname" element={<Product />} />
      <Route path="products/:productname" element={<ProductDetail />} />
      <Route path="cart" element={<Cart />} />
      <Route path="wishlist" element={<Wishlist />} />
      <Route path="account" element={<Account />}>
        <Route path="profile" element={<Profile />} />
        <Route path="address" element={<Address />} />
      </Route>
      <Route path="login" element={<Login />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
