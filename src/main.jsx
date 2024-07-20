import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
const Home = lazy(() => import('./components/home/Home.jsx'));
const Products = lazy(() => import('./components/products/Products.jsx'));
const ProductDetail = lazy(() => import('./components/products/ProductDetail.jsx'));
const Cart = lazy(() => import('./components/cart/Cart.jsx'));
const Wishlist = lazy(() => import('./components/wishlist/Wishlist.jsx'));
const Account = lazy(() => import('./components/account/Account.jsx'));
const Profile = lazy(() => import('./components/account/Profile.jsx'));
const Address = lazy(() => import('./components/account/Address.jsx'));
const Login = lazy(() => import('./components/login/Login.jsx'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/E-Commerce" element={<App />}>
      <Route index element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="products/category/:categoryname" element={<Products />} />
      <Route path="products/productName/:productname" element={<Products />} />
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
