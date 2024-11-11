import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './app/store.js';
import AuthGuard from './components/AuthGuard.jsx';
import { ToastProvider } from './components/ToastContextProvider.jsx';
const Home = lazy(() => import('./components/home/Home.jsx'));
const ProductsPage = lazy(() => import('./pages/Products.jsx'));
const ProductDetail = lazy(() => import('./components/products/ProductDetail.jsx'));
const Cart = lazy(() => import('./pages/Cart.jsx'));
const Wishlist = lazy(() => import('./pages/Wishlist.jsx'));
const Account = lazy(() => import('./components/account/Account.jsx'));
const Profile = lazy(() => import('./components/account/Profile.jsx'));
const Address = lazy(() => import('./components/account/Address.jsx'));
const Login = lazy(() => import('./pages/Login.jsx'));
const Signup = lazy(() => import('./pages/Signup.jsx'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/E-Commerce" element={<App />}>
      <Route index element={<Home />} />
      <Route path="products" element={<ProductsPage />} />
      <Route path="products/category/:categoryname" element={<ProductsPage />} />
      <Route path="products/productName/:productname" element={<ProductsPage />} />
      <Route path="products/:productname" element={<ProductDetail />} />

      <Route element={<AuthGuard />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="cart" element={<Cart />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="account" element={<Account />}>
          <Route path="profile" element={<Profile />} />
          <Route path="address" element={<Address />} />
        </Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ToastProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ToastProvider>
  // </React.StrictMode>
);
