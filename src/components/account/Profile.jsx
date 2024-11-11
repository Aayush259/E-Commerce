import React, { useState } from 'react';
import { useUser } from '../../hooks/useStoreItems';
import { useToast } from '../ToastContextProvider';
import { logout } from '../../app/auth';

export default function Profile() {

    const { user } = useUser();
    const { addToast } = useToast();

    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const logoutUser = async () => {
        setIsLoggingOut(true);
        
        try {
            await logout(user._id);
            addToast('Logged out successfully.', true);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoggingOut(false);
            window.location.reload();
        }
    };

    return (
        <div className="text-xl md:text-2xl font-semibold flex flex-col items-start justify-center w-full py-7 px-6 gap-5">
            {
                user?.name && <p>
                    <span className="text-slate-400 mr-2">
                        Name:
                    </span>
                    <span>
                        {user.name}
                    </span>
                </p>
            }

            {
                user?.email && <p>
                    <span className="text-slate-400 mr-2">
                        Email:
                    </span>
                    <span>
                        {user.email}
                    </span>
                </p>
            }

            {
                user?.phone && <p>
                    <span className="text-slate-400 mr-2">
                        Phone:
                    </span>
                    <span>
                        {user.phone}
                    </span>
                </p>
            }

            {
                user?.city && <p>
                    <span className="text-slate-400 mr-2">
                        City:
                    </span>
                    <span>
                        {user.city}
                    </span>
                </p>
            }

            {
                user?.state && <p>
                    <span className="text-slate-400 mr-2">
                        State:
                    </span>
                    <span>
                        {user.state}
                    </span>
                </p>
            }

            {
                user?.pincode && <p>
                    <span className="text-slate-400 mr-2">
                        PIN Code:
                    </span>
                    <span>
                        {user.pincode}
                    </span>
                </p>
            }

            {
                user?.address && <p>
                    <span className="text-slate-400 mr-2">
                        Address:
                    </span>
                    <span>
                        {user.address}
                    </span>
                </p>
            }

            <button
                type="button"
                className={`bg-slate-900 p-2 my-2 border w-full text-white border-slate-900 font-semibold text-lg hover:bg-white hover:text-slate-900 duration-300 ${isLoggingOut ? "opacity-50" : "opacity-100"} `}
                disabled={isLoggingOut}
                onClick={logoutUser}
            >
                Logout
            </button>
        </div>
    );
};
