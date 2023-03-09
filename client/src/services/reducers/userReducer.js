import {
    SETUP_USER_BEGIN,
    SETUP_USER_SUCCESS,
    SETUP_USER_FAIL
} from "../constants/userConstants";

import { LOGOUT_USER } from "../constants/authConstants";

const initialState = {
    userLoading: false,
    user: {}
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETUP_USER_BEGIN:
            return {
                ...state,
                userLoading: true
            }
        case SETUP_USER_SUCCESS:
            return {
                ...state,
                userLoading: false,
                user: action.payload
            }
        case SETUP_USER_FAIL:
            return {
                ...state,
                userLoading: false,
                user: null
            }
        case LOGOUT_USER:
            return {
                ...state,
                user: null
            }
        default: 
            return state;
    }
}

export default userReducer;