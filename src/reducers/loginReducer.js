import * as types from '../actions/types';


const initialState = {
    isLoggedIn: false,
    userName: ''
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_USERNAME:
            return {
                ...state,
                isLoggedIn: true,
                userName: action.payload['userName']
            };
        default:
            return state;
    }
};

export default loginReducer;
