import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function NavigationLink({ linkText, linkTo }) {
    return (
        <NavLink
            to={linkTo}
            className={`w-full text-center py-3 lg:w-fit lg:py-0 sm:hover:scale-105 duration-300`}
        >
            {linkText}
        </NavLink>
    );
}

NavigationLink.propTypes = {
    linkText: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
};
