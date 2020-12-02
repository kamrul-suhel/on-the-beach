import {HYDRATE} from 'next-redux-wrapper';

const initialState = {
    price: null,
    rating: null
}

const filter = (state = {...initialState}, action) => {
    switch (action.type) {
        case HYDRATE:
            return {
                ...state,
                ...action.payload
            }

        case 'SET_FILTER_BY_PRICE':
            return {
                ...state,
                rating: null,
                price: action.payload
            }

        case 'SET_FILTER_BY_RATING':
            return {
                ...state,
                price: null,
                rating: action.payload
            }

        case 'RESET_FILTER_OPTIONS':
            return {
                ...state,
                ...initialState
            }

        default:
            return state;
    }
}

export default filter
