import {HYDRATE} from 'next-redux-wrapper';

const initialState = {
    products: [],
    totalProduct: 0,
}

const products = (state = {...initialState}, action) => {
    switch (action.type) {
        case HYDRATE:
            return {
                ...state,
                ...action.payload
            }

        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload,
                totalProduct: action.payload.length
            }

        case 'SET_TOTAL_PRODUCTS':
            return {
                ...state,
                totalProduct: action.payload
            }

        case 'RESET_PRODUCTS':
            return {
                ...state,
                ...initialState
            }

        default:
            return state;
    }
}

export default products
