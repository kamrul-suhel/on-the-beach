import {HYDRATE} from 'next-redux-wrapper';

const initialState = {
    name: 'App name',
    role: 'admin',
    description: 'Some description from user'
}

const user = (state = {...initialState}, action) => {
    switch (action.type) {
        case HYDRATE:
            return {
                ...state,
                ...action.payload
            }

        case 'TICK':
            return {
                ...state,
                tick: action.payload
            }

        case 'UPDATE_NAME':
            return {
                ...state,
                name: action.payload
            }

        default:
            return state;
    }
}

export default user
