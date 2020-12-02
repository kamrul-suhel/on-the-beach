import React from "react";
import {Typography} from "@material-ui/core";
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import StarIcon from '@material-ui/icons/Star';
import {useDispatch, useSelector} from "react-redux";

const FilterComponent = () => {

    const dispatch = useDispatch()
    const filterByPrice = useSelector(state => state.filter.price)
    const filterByRating = useSelector(state => state.filter.rating)

    const handleSortProduct = (sortType) => {

        if(sortType === 'price'){

            const sortOrder = filterByPrice === 'asc' ? 'desc' : 'asc'
            dispatch({
                type:'SET_FILTER_BY_PRICE',
                payload: sortOrder
            })
        }

        if(sortType === 'rating'){
            const sortOrder = filterByRating === 'asc' ? 'desc' : 'asc'
            dispatch({
                type:'SET_FILTER_BY_RATING',
                payload: sortOrder
            })
        }
    }

    const renderActiveClass = (type) => {
        if(
            type === 'price' &&
            filterByPrice
        ){
            return 'active'
        }

        if(
            type === 'rating' &&
            filterByRating
        ){
            return 'active'
        }
    }

    return (
        <aside id="filterSection">
            <div className="filterHeader">
                <Typography component="p" variant="body1">Sort <strong>alphabetically</strong></Typography>
                <SortByAlphaIcon/>
            </div>

            <div className="filterOption">
                <ul>
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
