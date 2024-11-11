import React, { useEffect, useState } from 'react';
import appLogo from '../../images/app-logo.jpg';
import { Link } from 'react-router-dom';
import NavigationLink from './NavigationLink.jsx';
import Search from './Search.jsx';
import { useUser } from '../../hooks/useStoreItems.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Nav() {

    const { isLoggedIn } = useUser();

    const [searchOpen, setSearchOpen] = useState(false);

    // Array of navigation links text and their links.
    const navigationLinks = [
        {
            linkText: 'Products',
            linkTo: '/E-Commerce/products',
            icon: 'fa-solid fa-headphones'
        },
        {
            linkText: 'Wishlist',
            linkTo: '/E-Commerce/wishlist',
            icon: 'fa-solid fa-heart'
        },
        {
            linkText: 'MyCart',
            linkTo: '/E-Commerce/cart',
            icon: 'fa-solid fa-cart-shopping'
        },
        {
            linkText: isLoggedIn ? 'Account' : 'Login',
            linkTo: isLoggedIn ? '/E-Commerce/account/profile' : '/E-Commerce/login',
            icon: isLoggedIn ? 'fa-solid fa-user' : 'fa-solid fa-right-to-bracket'
        },
    ];

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
            className="bg-black sticky top-0 z-30 flex flex-row items-center justify-between px-3"
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            <Link to={'/E-Commerce/'} className="w-fit relative z-20 flex items-center justify-start flex-grow bg-black lg:flex-grow-0 sm:hover:opacity-65 duration-300">
                <img
                    src={appLogo}
                    alt="Sound sphere"
                    className="w-12 rounded-full m-3 mxl-0"
                />
                <p className="text-xl font-semibold text-white sm:text-3xl">
                    Sound Sphere
                </p>
            </Link>
            <button
                className="absolute top-0 right-6 z-30 h-full flex flex-col items-center justify-center sm:hover:opacity-75 md:hidden duration-300"
                onClick={handleHamburgerClick}
            >
                <div
                    className={`w-6 h-[2px] bg-white rounded duration-300 ${hamActive ? "rotate-45 translate-y-2" : ""}`}
                ></div>
                <div
                    className={`w-6 h-[2px] my-[4px] bg-white rounded duration-300 ${hamActive ? "opacity-0" : ""}`}
                ></div>
                <div
                    className={`w-6 h-[2px] bg-white rounded duration-300 ${hamActive ? "-rotate-45 -translate-y-[4px]" : ""}`}
                ></div>
            </button>

            <div
                className={`text-white text-lg font-medium sm:text-xl mr-4 flex flex-col items-center md:flex-row gap-0 md:gap-8 absolute z-10 left-0 md:static bg-black w-[100vw] md:w-fit px-0 md:py-0 duration-1000 py-0 ${hamActive ? "py-4 top-[72px]" : "top-[-100vh]"}`}
            >
                <div className={`duration-500 -mb-8 md:mb-0 md:-mr-8 ${searchOpen ? "w-full" : "w-fit md:w-0"}`}>
                    <Search setSearchOpen={setSearchOpen} />
                </div>

                <button
                    className={`duration-500 overflow-hidden ${searchOpen ? "w-0" : "w-0 md:w-full"}`}
                    onClick={() => setSearchOpen(true)}
                >
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className={`${searchOpen ? "hidden" : "block"}`} />
                </button>
                {
                    navigationLinks.map(link => (
                        <NavigationLink key={link['linkText']} linkText={link['linkText']} linkTo={link['linkTo']} setHamActive={setHamActive} icon={link['icon']} />
                    ))
                }
            </div>
        </nav>
    );
};
