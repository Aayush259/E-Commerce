import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUser } from "../hooks/useStoreItems";

export default function AuthGuard() {

    const { isLoggedIn } = useUser();

    const location = useLocation();

    // If user is not logged in, redirect to login page.
    if (!isLoggedIn && location.pathname !== '/E-Commerce/login' && location.pathname !== '/E-Commerce/signup') {
        return <Navigate to="/E-Commerce/login" replace />;
    }

    if (isLoggedIn && (location.pathname === '/E-Commerce/login' || location.pathname === '/E-Commerce/signup')) {
        return <Navigate to="/E-Commerce" replace />;
    }

    return <Outlet />;
};
