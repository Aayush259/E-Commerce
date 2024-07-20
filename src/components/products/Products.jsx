import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import { useProductData } from '../../contexts/ProductDataContext';
import FilterSection from './FilterSection';

export default function Product() {

    // Getting productData state from context.
    const { productData, setProductData } = useProductData();

    useEffect(() => {

        fetch('./data.json')
        .then(response => response.json())
        .then(data => setProductData(data))
        .catch(err => console.log(err))
        
    }, []);

    return (
        <div className="flex flex-row flex-wrap justify-start items-start relative">
            <FilterSection />
            <div className="flex flex-row justify-start items-center flex-wrap gap-4 mx-8 my-4">
                {
                    productData ? (
                        productData.map(product => (
                            <ProductCard key={product['name']} productDetails={product} />
                        ))
                    ) : null
                }
            </div>
        </div>
    );
};
