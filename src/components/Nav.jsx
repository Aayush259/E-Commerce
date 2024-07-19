import React from 'react';
import appLogo from '../images/app-logo.jpg';
import { Link } from 'react-router-dom';

export default function Nav() {

    return (
        <nav className="bg-black">
            <Link to={'/'} className="w-fit flex items-center justify-center hover:opacity-65 duration-200">
                <img
                    src={appLogo}
                    alt="Sound sphere"
                    className="w-12 rounded-full m-3"
                />
                <p className="text-xl font-semibold text-white sm:text-3xl">
                    Sound Sphere
                </p>
            </Link>
        </nav>
    );
};
