import {HYDRATE} from 'next-redux-wrapper';

const initialState = {
    price: true,
    rating: null,
    alphabetic: null
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
                alphabetic: null,
                price: action.payload
            }

        case 'SET_FILTER_BY_RATING':
            return {
                ...state,
                price: null,
                alphabetic: null,
                rating: action.payload
            }

        case 'SET_FILTER_BY_ALPHABETIC':
            return {
                ...state,
                price: null,
                alphabetic: action.payload,
                rating: null
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
