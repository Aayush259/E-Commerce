import axios from "axios";

const API_URL = "https://e-commerce-backend-hiso.onrender.com";

// Set access token in local storage.
const setAccessToken = (accessToken) => {
    localStorage.setItem("accessToken", accessToken);
};

// Get access token from local storage.
export const getAccessToken = () => {
    return localStorage.getItem("accessToken");
};

// Remove access token from local storage.
const removeAccessToken = () => {
    localStorage.removeItem("accessToken");
};

// Set user in local storage.
const setUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
};

// Remove user from local storage.
const removeUser = () => {
    localStorage.removeItem("user");
};

// Get user from local storage.
export const getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

// Signup user.
export const signup = async (name, email, password) => {
    try {
        const response = await axios.post(`${API_URL}/auth/signup`, { name, email, password });
        return { ok: true, data: response.data };
    } catch (error) {
        throw { ok: false, data: error.response.data };
    }
};

// Login user.
export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, { email, password });
        const { accessToken } = response.data;
        setAccessToken(accessToken);
        setUser({_id: response.data.user._id, name: response.data.user.name, email: response.data.user.email});
        return { ok: true, data: response.data };
    } catch (error) {
        throw { ok: false, data: error.response.data };
    }
};

// Logout user.
export const logout = async (id) => {
    try {
        await axios.post(`${API_URL}/auth/logout`, { id });
        removeAccessToken();
        removeUser();
    } catch (error) {
        throw error.response.data;
    }
}

// Refresh access token.
export const refreshAccessToken = async () => {
    try {
        const response = await axios.post(`${API_URL}/auth/refresh`, {}, { withCredentials: true });
        setAccessToken(response.data.accessToken);
        return response.data;
    } catch (error) {
        removeAccessToken();
        removeUser();
        throw error.response.data;
    }
};
