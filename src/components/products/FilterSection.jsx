import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FilterSection() {

    // State for filter section active.
    const [filterActive, setFilterActive] = useState(false);

    // Enables filter section.
    const handleFilterBtnClick = () => {
        setFilterActive(true);
    };

    // Apply filters and disable filter section.
    const applyFilters = (e) => {
        e.preventDefault();
        setFilterActive(false);
    };

    return (
        <section className="w-[100vw] lg:w-[250px] max-w-full relative">
            <button
                className="flex flex-col items-center justify-center text-xl text-white bg-slate-900 p-3 w-full fixed bottom-0 z-20 lg:hidden"
                onClick={handleFilterBtnClick}
            >
                <FontAwesomeIcon icon="fa-solid fa-angle-up" className="h-6" />
                <span>Filters</span>
            </button>
            
            <form
                className={`${filterActive ? '' : 'hidden'} w-[100vw] lg:block lg:w-[250px] max-w-full pb-24 h-[100vh] overflow-y-auto lg:border-r-2 lg:border-slate-900 fixed z-[25] bg-white`}
            >

                <div className="flex flex-row items-center justify-between p-4 border-b border-slate-700">
                    <h2 className="text-xl font-semibold">
                        Filters
                    </h2>

                    <button
                        type='reset'
                        className="italic underline bg-slate-200 p-2 rounded-lg sm:hover:opacity-65"
                    >
                        Clear
                    </button>
                </div>

                <div className="px-4 my-10 md:my-4">
                    <p className="text-lg font-semibold">
                        Price
                    </p>

                    <div className="flex flex-col gap-2 mt-3">
                        <label htmlFor="highToLow" className="flex flex-row items-center justify-start gap-2">
                            <input type="radio" name="priceFilter" id="highToLow" /> High To Low
                        </label>

                        <label htmlFor="lowToHigh" className="flex flex-row items-center justify-start gap-2">
                            <input type="radio" name="priceFilter" id="lowToHigh" /> Low To High
                        </label>
                    </div>

                </div>

                <div className="px-4 my-10 md:my-4">
                    <p className="text-lg font-semibold">
                        Categories
                    </p>

                    <div className="flex flex-col gap-2 mt-3">
                        <label htmlFor="wired" className="flex flex-row items-center justify-start gap-2">
                            <input type="checkbox" name="category" id="wired" /> Wired
                        </label>

                        <label htmlFor="noiseCancelling" className="flex flex-row items-center justify-start gap-2">
                            <input type="checkbox" name="category" id="noiseCancelling" /> Noise Cancelling
                        </label>

                        <label htmlFor="wireless" className="flex flex-row items-center justify-start gap-2">
                            <input type="checkbox" name="category" id="wireless" /> Wireless
                        </label>

                        <label htmlFor="speaker" className="flex flex-row items-center justify-start gap-2">
                            <input type="checkbox" name="category" id="speaker" /> Speaker
                        </label>
                    </div>

                </div>

                <div className="px-4 my-10 md:my-4">

                    <p className="text-lg font-semibold">
                        Ratings
                    </p>

                    <div className="flex flex-col gap-2 mt-3">
                        <label htmlFor="rating" className="flex flex-row items-center justify-start gap-2">
                            <input type="range" name="rating" id="rating" defaultValue={5} step={1} min={1} max={5} className="w-full max-w-sm" />
                        </label>
                    </div>

                </div>

                <button
                    type="submit"
                    className="block bg-slate-900 text-white px-3 py-2 rounded-lg ml-4 text-xl tracking-wider"
                    onClick={applyFilters}
                >
                    Apply
                </button>

            </form>
        </section>
    );
};
