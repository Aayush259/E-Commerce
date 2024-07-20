import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useProductData } from '../../contexts/ProductDataContext.jsx';
import FilterSection from './FilterSection.jsx';
import Loader from '../Loader.jsx';

export default function Product() {

    // Getting productData state from context.
    const { productData } = useProductData();

    // State for products to display.
    const [productsToDisplay, setProductsToDisplay] = useState([]);

    // State for filter criteria.
    const [filterCriteria, setFilterCriteria] = useState([
        'Wired', 'Noise Cancelling', 'Wireless', 'Speaker'
    ]);

    // Update productsToDisplay when productData is changed.
    useEffect(() => {
        setProductsToDisplay(productData);
    }, [productData]);

    // Update productsToDisplay when productData or filterCriteria changes.
    useEffect(() => {
        const filteredProducts = productData.filter(product => 
            filterCriteria.includes(product['category'])
        );

        if (filteredProducts.length <= 0) return;
        
        setProductsToDisplay(filteredProducts);
    }, [productData, filterCriteria]);

    return (
        <div className="flex flex-row flex-wrap justify-start items-start relative">
            <FilterSection setFilterCriteria={setFilterCriteria} />
            <div className="flex flex-row justify-start items-center flex-wrap gap-4 mx-8 my-4 lg:ml-72 lg:mr-64">
                {
                    productsToDisplay ? (
                        productsToDisplay.map(product => (
                            <ProductCard key={product['name']} productDetails={product} />
                        ))
                    ) : <Loader />
                }
            </div>
        </div>
    );
};
