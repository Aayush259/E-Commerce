import React from 'react';
import ProductCard from './ProductCard';
import { useProductData } from '../../contexts/ProductDataContext.jsx';
import FilterSection from './FilterSection.jsx';
import Loader from '../Loader.jsx';

export default function Product() {

    // Getting productData state from context.
    const { productData } = useProductData();

    return (
        <div className="flex flex-row flex-wrap justify-start items-start relative">
            <FilterSection />
            <div className="flex flex-row justify-start items-center flex-wrap gap-4 mx-8 my-4 lg:ml-72 lg:mr-64">
                {
                    productData ? (
                        productData.map(product => (
                            <ProductCard key={product['name']} productDetails={product} />
                        ))
                    ) : <Loader />
                }
            </div>
        </div>
    );
};
