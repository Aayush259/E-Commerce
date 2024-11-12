import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../app/auth';
import { useToast } from '../components/ToastContextProvider';

export default function Signup() {

    const navigate = useNavigate();     // Hook for programmatic navigation.
    const { addToast } = useToast();    // Custom hook for displaying toast notifications.

    // State to manage form input data.
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    });

    // State to track signup process.
    const [isSigningUp, setIsSigningUp] = useState(false);

    // Handle form submission.
    const handleSignup = async (e) => {
        e.preventDefault();

        // Basic form validation.
        if (!data.name && !data.email && !data.password) return alert('All fields are required.');

        // Set loading state.
        setIsSigningUp(true);

        try {
            // Attempt to signup user.
            const res = await signup(data.name, data.email, data.password);

            if (res.ok) {
                // Redirect to login page on successful signup.
                navigate('/E-Commerce/login');
            } else {
                // Show error toast if signup fails.
                addToast('Failed to signup.', false);
            }
        } catch (error) {
            // Show error toast if request fails.
            addToast('Failed to signup.', false);
        } finally {
            // Reset loading state.
            setIsSigningUp(false);
        }
    };

    return (
        <div className="flex min-h-[100vh] w-[100vw] max-w-[600px] m-auto flex-col items-center justify-center px-7">
            <form className="w-full" onSubmit={handleSignup}>
                <h2 className="text-center font-semibold text-2xl md:text-3xl mb-4">Sign Up</h2>

                {
                    ['name', 'email', 'password'].map((type) => (
                        <label key={type} htmlFor={type} className="w-full my-4 text-slate-800 flex flex-col gap-2">
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                            <input
                                type={type}
                                name={type}
                                id={type}
                                className="bg-red-100 p-2 w-full border border-slate-900 rounded-md"
                                value={data[type]}
                                onChange={(e) => setData({ ...data, [type]: e.target.value })}
                                required
                            />
                        </label>
                    ))
                }

                <button
                    className={`w-full bg-slate-900 text-white my-3 text-lg md:text-xl py-2 border border-slate-900 hover:bg-white hover:text-slate-900 mt-4 duration-300 ${isSigningUp ? "opacity-50" : "opacity-100"}`}
                    disabled={isSigningUp}
                >
                    Sign Up
                </button>

                <p className="text-center my-4">
                    Already have an account? <Link to={"/E-Commerce/login"} className="underline underline-offset-4">Login</Link>
                </p>
            </form>
        </div>
    );
}
