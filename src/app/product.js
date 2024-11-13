import axios from "axios";
import { getAccessToken } from "./auth";

const API_URL = "https://e-commerce-backend-eight-mu.vercel.app";

export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`);
        return { ok: true, data: response.data };
    } catch (error) {
        console.log(error);
    }
}

export const addToCart = async (productId) => {
    try {
        const response = await axios.post(
            `${API_URL}/products/addToCart`,
            { productId: productId },
            {
                headers: {
                    Authorization: `Bearer ${getAccessToken()}`
                }
            }
        )

        return { ok: true, data: response.data };
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const addToWishlist = async (productId) => {
    try {
        const response = await axios.post(
            `${API_URL}/products/addToWishlist`,
            { productId: productId },
            {
                headers: {
                    Authorization: `Bearer ${getAccessToken()}`
                }
            }
        )

        return { ok: true, data: response.data };
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const removeFromCart = async (productId) => {
    try {
        const response = await axios.post(
            `${API_URL}/products/removeFromCart`,
            { productId: productId },
            {
                headers: {
                    Authorization: `Bearer ${getAccessToken()}`
                }
            }
        )

        return { ok: true, data: response.data };
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const removeFromWishlist = async (productId) => {
    try {
        const response = await axios.post(
            `${API_URL}/products/removeFromWishlist`,
            { productId: productId },
            {
                headers: {
                    Authorization: `Bearer ${getAccessToken()}`
                }
            }
        )

        return { ok: true, data: response.data };
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getCart = async () => {
    try {
        const response = await axios.get(
            `${API_URL}/products/getCart`,
            {
                headers: {
                    Authorization: `Bearer ${getAccessToken()}`
                }
            }
        )

        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const clearCart = async () => {
    try {
        const response = await axios.post(
            `${API_URL}/products/clearCart`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${getAccessToken()}`
                }
            }
        )

        return { ok: true, data: response.data };
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getWishlist = async () => {
    try {
        const response = await axios.get(
            `${API_URL}/products/getWishlist`,
            {
                headers: {
                    Authorization: `Bearer ${getAccessToken()}`
                }
            }
        )

        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getProductsByIds = async (productIds) => {
    try {
        const response = await axios.get(
            `${API_URL}/products/productByIds`,
            { ids: productIds },
        )

        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
