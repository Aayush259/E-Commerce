import React, { Suspense, useEffect, useState } from 'react';
import Nav from './components/nav/Nav.jsx';
import Loader from './components/Loader.jsx';
import { Outlet } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { getAccessToken, getUser, logout, refreshAccessToken } from './app/auth.js';
import { useDispatch } from 'react-redux';
import { setUser } from './features/user/userSlice.js';

library.add(fas, fab);

export default function App() {

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessToken = getAccessToken();

    const fetchUser = async () => {
      const user = await getUser();

      if (user) {
        dispatch(setUser({
          _id: user._id,
          name: user.name,
          email: user.email,
          cart: user.cart,
          wishlist: user.wishlist,
          address: user.address,
          phone: user.phone,
          pincode: user.pincode,
          city: user.city,
          state: user.state,
        }));

        setLoading(false);
      } else {
        try {
          console.log("Refreshing token")
          const newAccessToken = await refreshAccessToken();

          if (newAccessToken) {
            await fetchUser();
          } else {
            throw new Error("Unable to refresh access token");
          }
        } catch (error) {
          console.log("Error refreshing token, logging out:", error);
          await logout();
          setLoading(false);
        }
      }
    };

    if (accessToken) {
      fetchUser();
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Nav />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
