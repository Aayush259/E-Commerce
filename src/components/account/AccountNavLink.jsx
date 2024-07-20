import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function AccountNavLink({ linkTo }) {
  return (
    <NavLink
      to={linkTo}
      className={({ isActive }) => `
        flex-grow py-3 px-2 md:text-xl text-center capitalize
        ${isActive ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}
      `}
    >
      {linkTo}
    </NavLink>
  );
}

AccountNavLink.propTypes = {
  linkTo: PropTypes.string.isRequired,
};
