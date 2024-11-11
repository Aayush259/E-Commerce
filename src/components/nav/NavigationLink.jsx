import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useUser } from '../../hooks/useStoreItems.js';

export default function NavigationLink({ linkText, linkTo, setHamActive, icon }) {

    const { user, isLoggedIn } = useUser();

    return (
        <NavLink
            to={linkTo}
            className={`w-full text-center py-3 md:w-fit xl:py-0 sm:hover:scale-105 duration-300 flex items-center justify-center gap-3 relative`}
            onClick={() => { setHamActive(false) }}
        >
            {
                isLoggedIn && user?.cart && user.cart.length > 0 && linkText === 'MyCart' && <div
                    className="text-xs text-slate-900 bg-yellow-400 w-4 h-4 flex justify-center items-center rounded-full font-bold absolute translate-x-1/4 -translate-y-[110%]"
                >
                    {user.cart.length}
                </div>
            }
            <FontAwesomeIcon icon={icon} />

            <span className="inline-block md:hidden">
                {linkText}
            </span>
        </NavLink>
    );
};

NavigationLink.propTypes = {
    linkText: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
    setHamActive: PropTypes.func.isRequired,
};
