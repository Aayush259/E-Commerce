import React from 'react';

export default function Login() {

    return (
        <div className="flex min-h-[100vh] w-[100vw] max-w-[600px] m-auto flex-col items-center justify-center px-7">
            <form className="w-full">
                <h2 className="text-center font-semibold text-2xl md:text-3xl mb-4">Login</h2>

                {
                    ['email', 'password'].map((type) => (
                        <label key={type} htmlFor={type} className="w-full my-4 text-slate-800 flex flex-col gap-2">
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                            <input
                                type={type}
                                name={type}
                                id={type}
                                className="bg-red-100 p-2 w-full border border-slate-900 rounded-md"
                            />
                        </label>
                    ))
                }

                {
                    ['Login', 'Sign Up'].map((text, index) => (
                        <button
                            key={text}
                            className={`w-full bg-slate-900 text-white text-lg md:text-xl py-2 border border-slate-900 hover:bg-white hover:text-slate-900 mt-${index === 0 ? '4' : '2'} duration-300`}
                            onClick={(e) => e.preventDefault()}
                        >
                            {text}
                        </button>
                    ))
                }
            </form>
        </div>
    );
}
