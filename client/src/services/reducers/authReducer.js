import {
    AUTH_FORM_CHANGE,
    SET_AUTH_LOADING,
    SET_AUTH_FORM_ERROR
} from "../constants/authConstants";

const initialState = {
    authFormData: {},
    isLoading: false,
    formError: ''
}

const authReducer = (state = initialState, action) => {
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
        case SET_AUTH_FORM_ERROR:
            return {
                ...state,
                formError: action.payload
            }
        default: 
            return state;
    }
}

export default authReducer;