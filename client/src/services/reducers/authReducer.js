import {
    AUTH_FORM_CHANGE,
    SET_AUTH_LOADING
} from "../constants/authConstants";

const initialState = {
    authFormData: {},
    isLoading: false
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_FORM_CHANGE:
            return {
                ...state,
                authFormData: { ...state.authFormData, ...action.payload }
            }
        case SET_AUTH_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default: 
            return state;
    }
}

export default loginReducer;