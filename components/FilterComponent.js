import React from "react";
import {Typography} from "@material-ui/core";
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import StarIcon from '@material-ui/icons/Star';
import {useDispatch, useSelector} from "react-redux";

const FilterComponent = () => {

    const dispatch = useDispatch()
    const filterByPrice = useSelector(state => state.filter.price)
    const filterByRating = useSelector(state => state.filter.rating)
    const filterByAlphabetic = useSelector(state => state.filter.alphabetic)

    const handleSortProduct = (sortType) => {

        if (sortType === 'price') {

            dispatch({
                type: 'SET_FILTER_BY_PRICE',
                payload: true
            })
        }

        if (sortType === 'rating') {
            dispatch({
                type: 'SET_FILTER_BY_RATING',
                payload: true
            })
        }

        if (sortType === 'alphabetic') {
            dispatch({
                type: 'SET_FILTER_BY_ALPHABETIC',
                payload: true
            })
        }
    }

    const renderActiveClass = (type) => {
        if (
            type === 'price' &&
            filterByPrice
        ) {
            return 'active'
        }

        if (
            type === 'rating' &&
            filterByRating
        ) {
            return 'active'
        }

        if (
            type === 'alphabetic' &&
            filterByAlphabetic
        ) {
            return 'active'
        }
    }

    return (
        <aside id="filterSection">
            <div className="filterOption">
                <ul>
                    <li className={renderActiveClass('alphabetic')}
                        onClick={() => handleSortProduct('alphabetic')}>
                        <Typography component="p" variant="body1">Sort <strong>alphabetically</strong></Typography>
                        <SortByAlphaIcon/>
                    </li>

                    <li className={renderActiveClass('price')}
                        onClick={() => handleSortProduct('price')}>
                        <Typography component="p" variant="body1">Sort by <strong>price</strong></Typography>
                        <StarIcon className="colorGray"/>
                    </li>

                    <li className={renderActiveClass('rating')}
                        onClick={() => handleSortProduct('rating')}>
                        <Typography component="p" variant="body1">Sort by <strong>start rating</strong></Typography>
                        <StarIcon className="colorGray"/>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default FilterComponent
