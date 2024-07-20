import React from 'react';

export default function Address() {

    // Prevent default behavior of the buttons.
    const handleClick = (e) => {
        e.preventDefault();
    };

    const states = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
        "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
        "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
        "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
    ];

    return (
        <>
            <form className="max-w-[90%] m-auto my-8">
                <div className="flex flex-row flex-wrap gap-4">
                    {
                        ["Name", "Mobile", "PIN Code", "City"].map((placeholder) => (
                            <label key={placeholder} htmlFor={placeholder.toLowerCase()}>
                                <input
                                    type={placeholder === "Mobile" ? "tel" : "text"}
                                    id={placeholder.toLowerCase()}
                                    className="bg-slate-200 w-28 rounded-md text-xl p-2 border border-slate-900"
                                    placeholder={placeholder}
                                />
                            </label>
                        ))
                    }

                    <label htmlFor="address" className="w-full">
                        <textarea
                            id="address"
                            className="bg-slate-200 rounded-md text-xl p-2 border border-slate-900 w-full h-40"
                            placeholder="Address"
                        />
                    </label>
                </div>

                <select
                    id="state"
                    name="state"
                    className="bg-slate-200 mt-4 rounded-md text-xl p-2 border border-slate-900 block"
                >
                    <option value="Choose State">Choose State</option>

                    {
                        states.map((state) => (
                            <option key={state} value={state}>{state}</option>
                        ))
                    }
                </select>

                <div
                    className="flex flex-row items-center justify-center flex-wrap text-white w-full px-6 py-5 gap-[2px]"
                >
                    {
                        ["Add", "Random Data", "Cancel"].map((text) => (
                            <button
                                key={text}
                                className="bg-slate-900 p-3 border border-slate-900 font-semibold flex-grow hover:bg-white hover:text-slate-900 duration-300"
                                onClick={handleClick}
                            >
                                {text}
                            </button>
                        ))
                    }
                </div>
            </form>
            <div className="my-6 mx-6">
                <p className="font-semibold text-lg md:text-xl">Aayush (Demo)</p>
                <p className="mt-4">022222015042</p>
                <p>366/68 Diamond Mansion, 1St Flr, Room No 8 Kalbadevi Rd, Kalbadevi</p>
                <p>Mumbai</p>
                <p>Maharashtra</p>
            </div>
        </>
    );
}
