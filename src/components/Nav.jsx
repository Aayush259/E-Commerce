import React, { useEffect, useState } from 'react';
import appLogo from '../images/app-logo.jpg';
import { Link, NavLink } from 'react-router-dom';

export default function Nav() {

    // State for hamburger button.
    const [hamActive, setHamActive] = useState(false);

    // This function updates the hamburger button state.
    const handleHamburgerClick = () => {
        setHamActive(prevHamState => !prevHamState);
    };

    // Hides nav links when document is clicked or scrolled except nav.
    useEffect(() => {

        // This function hides the nav links if hamburger is active.
        const handleDocumentClick = () => {
            if (hamActive) {
                handleHamburgerClick();
            }
        };

        // Adding event listener to document for click or scroll to hide navlinks if hamburger is active.
        document.addEventListener('click', handleDocumentClick);
        document.addEventListener('scroll', handleDocumentClick);

        // Cleanup functions for event listeners on document.
        return () => {
            document.removeEventListener('click', handleDocumentClick);
            document.removeEventListener('scroll', handleDocumentClick);
        };
    });

    return (
        <nav
            className="bg-black relative flex flex-row items-center justify-between px-3"
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            <Link to={'/'} className="w-fit relative z-20 flex items-center justify-start flex-grow bg-black lg:flex-grow-0 sm:hover:opacity-65 duration-300">
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
                className="absolute top-0 right-4 z-30 h-full flex flex-col items-center justify-center sm:hover:opacity-75 lg:hidden duration-300"
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

            <div
                className={`text-white text-lg font-medium sm:text-xl flex flex-col lg:flex-row gap-0 lg:gap-4 absolute left-0 lg:static bg-black w-[100vw] lg:w-fit px-0 lg:py-0 duration-1000 py-0 ${hamActive ? "py-4 top-[72px]" : "top-[-100vh]"}`}
            >
                <NavLink
                    className={`w-full text-center py-3 lg:w-fit lg:py-0 sm:hover:scale-105 duration-300`}
                >
                    Products
                </NavLink>

                <NavLink
                    className={`w-full text-center py-3 lg:w-fit lg:py-0 sm:hover:scale-105 duration-300`}
                >
                    Wishlist
                </NavLink>

                <NavLink
                    className={`w-full text-center py-3 lg:w-fit lg:py-0 sm:hover:scale-105 duration-300`}
                >
                    My Cart
                </NavLink>

                <NavLink
                    className={`w-full text-center py-3 lg:w-fit lg:py-0 sm:hover:scale-105 duration-300`}
                >
                    Account
                </NavLink>

                <NavLink
                    className={`w-full text-center py-3 lg:w-fit lg:py-0 sm:hover:scale-105 duration-300`}
                >
                    Logout
                </NavLink>
            </div>
        </nav>
    );
};
