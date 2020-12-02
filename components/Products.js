import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import dummyData from "../src/dummyData";
import ProductItem from "./ProductItem";
import fn from "../src/utils/functions";
import CircularProgress from "@material-ui/core/CircularProgress";

const Products = () => {
    const products = useSelector(state => state.products.products)
    const filterByPrice = useSelector(state => state.filter.price)
    const filterByRating = useSelector(state => state.filter.rating)
    const filterByAlphabetic = useSelector(state => state.filter.alphabetic)

    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(true)

    /**
     * Initialize product when first load
     */
    useEffect(() => {
        /**
         * For now i am getting the data from local dummyData file.
         * it should be change with http request
         * we can use axios
         * I have made my api request.
         * file locate in src/utils/api.js
         */

        const fetchProducts = async () => {
            setIsLoading(true)
            let data;
            if(filterByPrice){
                data = fn.filterProducts(dummyData, 'price')
            }

            if(filterByRating){
                data = fn.filterProducts(dummyData, 'rating')
            }

            if(filterByAlphabetic){
                data = fn.filterProducts(dummyData, 'alphabetic')
            }

            // Dummy interval for now
            setTimeout(() => {
                dispatch({
                    type: 'SET_PRODUCTS',
                    payload: [...dummyData]
                })
                setIsLoading(false)
            }, 2000)
        }

        fetchProducts()
    }, [filterByPrice, filterByRating, filterByAlphabetic])

    return (
        <section id="productSection">
            {
                products.map((product) => {
                    return <ProductItem key={product.id} product={product}/>
                })
            }

            {isLoading && <div id="loading">
                <CircularProgress size={60} />
            </div>}
        </section>
    )
}

export default Products
