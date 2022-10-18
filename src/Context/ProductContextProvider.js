import React, {useEffect, useState, createContext} from 'react';

// API
import { getProducts } from '../Services/api';

export const ProductContext = createContext();

const ProductContextProvider = ({children}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const fetchAPI = async () => {
            setProducts(await getProducts());
        }

        fetchAPI();
    }, [])


    return (
        <div>
            <ProductContext.Provider value={products}>
                {children}
            </ProductContext.Provider>
        </div>
    );
};

export default ProductContextProvider;