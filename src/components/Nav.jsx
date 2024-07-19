import React, { useState } from 'react';
import appLogo from '../images/app-logo.jpg';
import { Link } from 'react-router-dom';

export default function Nav() {

    // State for hamburger button.
    const [hamActive, setHamActive] = useState(true);

    // This function updates the hamburger button state.
    const handleHamburgerClick = () => {
        setHamActive(prevHamState => !prevHamState);
    };

    return (
        <nav className="bg-black relative">
            <Link to={'/'} className="w-fit flex items-center justify-center sm:hover:opacity-65 duration-300">
                <img
                    src={appLogo}
                    alt="Sound sphere"
                    className="w-12 rounded-full m-3"
                />
                <p className="text-xl font-semibold text-white sm:text-3xl">
                    Sound Sphere
                </p>
            </Link>
            <button
                className="absolute top-0 right-4 h-full flex flex-col items-center justify-center sm:hover:opacity-75 sm:hidden duration-300"
                onClick={handleHamburgerClick}
            >
                <div
                    className={`w-8 h-1 bg-white rounded duration-300 ${hamActive ? "rotate-45 translate-y-2" : ""}`}
                ></div>
                <div
                    className={`w-8 h-1 my-[5px] bg-white rounded duration-300 ${hamActive ? "opacity-0" : ""}`}
                ></div>
                <div
                    className={`w-8 h-1 bg-white rounded duration-300 ${hamActive ? "-rotate-45 -translate-y-[10px]" : ""}`}
                ></div>
            </button>

        </nav>
    );
};
