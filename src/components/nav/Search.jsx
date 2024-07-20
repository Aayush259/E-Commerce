import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

export default function Search() {

    const inputRef = useRef();
    const navigate = useNavigate();

    const handleSearchBtnClick = () => {
        if (inputRef.current.value) {
            navigate(`/E-Commerce/products/productName/${inputRef.current.value}`);
        }
    };

    const handleInputChange = () => {
        if (!inputRef.current.value) {
            navigate(`/E-Commerce/products/`);
        };
    };

    return (
        <div className="bg-white max-w-[90%] mx-auto my-5 rounded-3xl text-black font-normal overflow-hidden flex flex-row items-center justify-center">
            <label htmlFor="searchBar">
                <input
                    ref={inputRef}
                    id="searchBar"
                    type="text"
                    className="bg-transparent flex-grow py-1 px-2"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSearchBtnClick()
                        }
                    }}
                    onChange={handleInputChange}
                />
            </label>
            <button
                className="bg-transparent p-1 px-2 hover:opacity-75 border-l border-slate-600"
                onClick={handleSearchBtnClick}
            >
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </button>
        </div>
    );
};
