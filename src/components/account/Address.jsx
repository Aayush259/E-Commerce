import React, { useState } from 'react';
import { updateContactInfo } from '../../app/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/useStoreItems';
import { updateUser } from '../../features/user/userSlice';

export default function Address() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user } = useUser();

    const [contactInfo, setContactInfo] = useState({
        address: "",
        phone: "",
        pincode: "",
        city: "",
        state: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const updateContact = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!contactInfo.address || !contactInfo.phone || !contactInfo.pincode || !contactInfo.city || !contactInfo.state) {
            console.log(contactInfo)
            console.log("Please fill all the fields");
            setIsSubmitting(false);
            // Todo: Add toaster notification.
            return;
        }

        try {
            await updateContactInfo(contactInfo);
            dispatch(updateUser({
                ...user,
                address: contactInfo.address,
                phone: contactInfo.phone,
                pincode: contactInfo.pincode,
                city: contactInfo.city,
                state: contactInfo.state,
            }));
            navigate("/E-Commerce/account/profile");
        } catch (error) {
            // Todo: Add toaster notification.
        }
        setIsSubmitting(false);
    }

    const states = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
        "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
        "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
        "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
    ];

    return (
        <>
            <form className="max-w-[90%] m-auto my-8" onSubmit={updateContact}>
                <div className="grid grid-cols-1 sm:grid-cols-2 flex-wrap gap-4 w-full">

                    <label htmlFor="phone">
                        <input
                            type="tel"
                            id="phone"
                            className="bg-slate-200 min-w-28 rounded-md text-xl p-2 border border-slate-900"
                            placeholder="Phone"
                            value={contactInfo.phone}
                            onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                        />
                    </label>

                    <label htmlFor="pincode">
                        <input
                            type="text"
                            id="pincode"
                            className="bg-slate-200 min-w-28 rounded-md text-xl p-2 border border-slate-900"
                            placeholder="PIN Code"
                            value={contactInfo.pincode}
                            onChange={(e) => setContactInfo({ ...contactInfo, pincode: e.target.value })}
                        />
                    </label>

                    <label htmlFor="city">
                        <input
                            type="text"
                            id="city"
                            className="bg-slate-200 min-w-28 rounded-md text-xl p-2 border border-slate-900"
                            placeholder="City"
                            value={contactInfo.city}
                            onChange={(e) => setContactInfo({ ...contactInfo, city: e.target.value })}
                        />
                    </label>

                    <select
                        id="state"
                        className="bg-slate-200 min-w-28 rounded-md text-xl p-2 border border-slate-900 cursor-pointer"
                        value={contactInfo.state}
                        onChange={(e) => setContactInfo({ ...contactInfo, state: e.target.value })}
                    >
                        <option value="">Select State</option>
                        {states.map((state) => (
                            <option key={state} value={state}>
                                {state}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="address" className="w-full sm:col-span-2">
                        <textarea
                            id="address"
                            className="bg-slate-200 rounded-md text-xl p-2 border border-slate-900 w-full h-40"
                            placeholder="Address"
                            value={contactInfo.address}
                            onChange={(e) => setContactInfo({ ...contactInfo, address: e.target.value })}
                        />
                    </label>
                </div>

                <div
                    className="flex flex-row items-center justify-center flex-wrap text-white w-full py-5 gap-[2px]"
                >
                    <button
                        type="submit"
                        className={`bg-slate-900 p-3 border border-slate-900 font-semibold flex-grow hover:bg-white hover:text-slate-900 duration-300 ${isSubmitting ? "opacity-50" : "opacity-100"} `}
                        disabled={isSubmitting}
                    >
                        Save
                    </button>
                </div>
            </form>
            <div className="my-6 mx-6">
                {
                    user?.name && <p className="font-semibold text-lg md:text-xl">
                        {user.name}
                    </p>
                }

                {
                    user?.phone && <p className="mt-4">
                        {user.phone}
                    </p>
                }

                {
                    user?.address && <p>
                        {user.address}
                    </p>
                }

                {
                    user?.city && <p>
                        {user.city}
                    </p>
                }

                {
                    user?.state && <p>
                        {user.state}
                    </p>
                }
            </div>
        </>
    );
}
