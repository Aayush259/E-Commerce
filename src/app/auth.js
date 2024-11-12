import axios from "axios";

const API_URL = "https://e-commerce-backend-sj1i.onrender.com";

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
        const response = await axios.post(`${API_URL}/auth/login`, { email, password }, { withCredentials: true });
        const { accessToken } = response.data;
        setAccessToken(accessToken);
        return { ok: true, data: response.data };
    } catch (error) {
        throw { ok: false, data: error.response.data };
    }
};

// Get user.
export const getUser = async () => {
    const accessToken = getAccessToken();

    if (!accessToken) return false;

    try {
        const response = await axios.get(
            `${API_URL}/auth/user`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }
        )

        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        return false;
    }
}

// Logout user.
export const logout = async (id) => {
    try {
        await axios.post(`${API_URL}/auth/logout`, { id });
    } catch (error) {
        throw error.response.data;
    } finally {
        removeAccessToken();
    }
}

// Refresh access token.
export const refreshAccessToken = async () => {
    try {
        const response = await axios.post(`${API_URL}/auth/refresh`, {}, { withCredentials: true });
        setAccessToken(response.data.accessToken);
        return response.data.accessToken;
    } catch (error) {
        await logout();
        throw error.response.message;
    }
};

export const updateContactInfo = async ({ address, phone, pincode, city, state }) => {
    const accessToken = getAccessToken();

    if (!accessToken) return false;
    
    try {
        const response = await axios.post(
            `${API_URL}/auth/updateContact`,
            { address, phone, pincode, city, state },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            }
        )

        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log("error");
        throw error;
    }
}
