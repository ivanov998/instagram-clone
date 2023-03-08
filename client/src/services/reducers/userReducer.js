import {
    SETUP_USER_BEGIN,
    SETUP_USER_SUCCESS,
    SETUP_USER_FAIL
} from "../constants/userConstants";

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
                user: []
            }
        default: 
            return state;
    }
}

export default userReducer;