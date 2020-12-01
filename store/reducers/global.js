import {HYDRATE} from 'next-redux-wrapper';

const initialState = {
    name: 'App name'
}

const global = (state = {...initialState}, action) => {
    switch (action.type) {
        case HYDRATE:
            return {...state, ...action.payload};

        case 'TICK':
            return {...state, tick: action.payload};

        default:
            return state;
    }
}

export default global
