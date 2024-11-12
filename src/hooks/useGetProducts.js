import { useDispatch } from 'react-redux';
import { getProducts } from '../features/product/productSlice.js';
import { useProducts } from './useStoreItems.js';
import { useEffect } from 'react';

const useGetProducts = () => {

    const dispatch = useDispatch();
    const productData = useProducts();

    if (productData && productData.length > 0) return;


    useEffect(() => {
        dispatch(getProducts());
    }, [])
};

export default useGetProducts;
