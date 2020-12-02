import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import dummyData from "../src/dummyData";
import ProductItem from "./ProductItem";

const Products = () => {
    const products = useSelector(state => state.products.products)

    const dispatch = useDispatch()


    /**
     * Initialize product when first load
     */
    useEffect(() => {
        /**
         * For now i am getting the data from local dummyData file.
         * it should be change with http request
         * we can use Axios
         * I have made my api request.
         * file locate in src/utils/api.js
         */

        const fetchProducts = async () => {
            dispatch({
                type: 'SET_PRODUCTS',
                payload: [...dummyData]
            })
        }

        fetchProducts()
    }, [])

    return (
        <section id="productSection">
            {
                products.map((product) => {
                    return <ProductItem key={product.id} product={product}/>
                })
            }
        </section>
    )
}

export default Products
