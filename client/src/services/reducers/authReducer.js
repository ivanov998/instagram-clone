import {
    AUTH_FORM_CHANGE,
    SET_AUTH_LOADING,
    SET_AUTH_FORM_ERROR,
    SET_AUTH_ERROR,
    CLEAR_ERRORS,
    SET_USER_AUTHENTICATED,
    CLEAR_USER_AUTHENTICATED,
    SETUP_USER_BEGIN,
    SETUP_USER
} from "../constants/authConstants";

const initialState = {
    authFormData: {},
    isLoading: false,
    formError: '',
    authError: '',
    authenticated: false,
    user: {}
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
        case SET_AUTH_ERROR:
            return {
                ...state,
                authError: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                authError: '',
                formError: ''
            }
        case SET_USER_AUTHENTICATED:
            return {
                ...state,
                authenticated: true
            }
        case CLEAR_USER_AUTHENTICATED:
            return {
                ...state,
                authenticated: false
            }
        case SETUP_USER_BEGIN:
            return {
                ...state,
                userLoading: true
            }
        case SETUP_USER:
            return {
                ...state,
                userLoading: false,
                user: action.payload
            }
        default: 
            return state;
    }
}

export default authReducer;