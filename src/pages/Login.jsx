import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../app/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/user/userSlice';

export default function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!data.email && !data.password) return alert('All fields are required.');

        const res = await login(data.email, data.password);

        if (res.ok) {
            navigate('/E-Commerce/products');
            dispatch(setUser({ id: res.data.user._id, name: res.data.user.name, email: res.data.user.email }));
        }
    };

    return (
        <div className="flex min-h-[100vh] w-[100vw] max-w-[600px] m-auto flex-col items-center justify-center px-7">
            <form className="w-full" onSubmit={handleLogin}>
                <h2 className="text-center font-semibold text-2xl md:text-3xl mb-4">Login</h2>

                {
                    ['email', 'password'].map((type) => (
                        <label key={type} htmlFor={type} className="w-full my-4 text-slate-800 flex flex-col gap-2">
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                            <input
                                type={type}
                                name={type}
                                id={type}
                                value={data[type]}
                                onChange={(e) => setData({ ...data, [type]: e.target.value })}
                                required
                                className="bg-red-100 p-2 w-full border border-slate-900 rounded-md"
                            />
                        </label>
                    ))
                }

                <button
                    type='submit'
                    className={`w-full bg-slate-900 text-white my-3 text-lg md:text-xl py-2 border border-slate-900 hover:bg-white hover:text-slate-900 mt-4 duration-300`}
                >
                    Login
                </button>

                <p className="text-center my-4">
                    Don't have account? <Link to={"/E-Commerce/signup"} className="underline underline-offset-4">Sign Up</Link>
                </p>
            </form>
        </div>
    );
}
