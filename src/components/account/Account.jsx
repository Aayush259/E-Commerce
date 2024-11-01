import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AccountNavLink from './AccountNavLink.jsx';
import Loader from '../Loader.jsx';

export default function Account() {
    return (
        <div className="w-[90vw] max-w-[600px] m-auto my-6 shadow-product-card-shadow rounded-b-2xl overflow-hidden">
            <div className="w-full flex flex-row items-center justify-center">
                <AccountNavLink linkTo={"profile"} />
                <AccountNavLink linkTo={"address"} />
            </div>

            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </div>
    );
}
