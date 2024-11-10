import React from 'react';
import { useUser } from '../../hooks/useStoreItems';

export default function Profile() {

    const { user } = useUser();

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
        </div>
    );
};
