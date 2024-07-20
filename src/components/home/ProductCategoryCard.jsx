import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ProductCategoryCard({ categoryName, categoryImg }) {

    return (
        <NavLink
            to={`/E-Commerce/products/category/${categoryName}`}
            className="flex flex-col items-center justify-center gap-2 max-w-[90vw] m-auto hover:outline"
        >
            <img src={categoryImg} alt="earphone" className="h-60 max-w-[80%] md:max-w-fit" />
            <p className="text-lg md:text-2xl tracking-wider">
                {categoryName}
            </p>
        </NavLink>
    );
};
