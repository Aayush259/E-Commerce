import React, { createContext, useContext, useState } from 'react';
import Toast from './toaster/Toast';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, success) => {
    const id = Math.random().toString(36).slice(2, 11);
    setToasts((prevToasts) => [...prevToasts, { id, message, success }]);
  };

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      <div className="w-fit fixed bottom-5 right-5 z-50 flex flex-col duration-500 h-fit">
        {toasts.map((toast) => (
          <Toast key={toast.id} message={toast.message} success={toast.success} onClose={() => removeToast(toast.id)} />
        ))}
      </div>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
