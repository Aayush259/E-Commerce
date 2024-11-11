import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Toast = ({ message, onClose, success }) => {

    useEffect(() => {
        setTimeout(() => {
            onClose();
        }, 4000);
    }, [])

    return (
        <div className="bg-slate-800 max-w-[80vw] min-w-[350px] p-3 md:py-4 md:px-8 text-center text-white flex justify-between items-center rounded-xl m-2 md:text-xl overflow-ellipsis animate-in">
            <div className="flex items-center justify-start gap-2">
                {
                    success ? <FontAwesomeIcon icon="fa-solid fa-check" className="text-green-500" /> : <FontAwesomeIcon icon="fa-solid fa-xmark" className="text-red-500" />
                }
                {message}
            </div>
            <button onClick={onClose}>
                <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </button>
        </div>
    );
};

export default Toast;
