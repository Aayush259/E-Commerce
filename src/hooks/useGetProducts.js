import { useDispatch } from 'react-redux';
import { getProducts } from '../features/product/productSlice.js';
import { useProducts } from './useStoreItems.js';

const useGetProducts = () => {

    const dispatch = useDispatch();
    const productData = useProducts();

    if (productData && productData?.length > 0) return;


    dispatch(getProducts());
};

export default useGetProducts;
