import {
    LOGIN_FORM_CHANGE,
    SET_LOGIN_LOADING
} from "../constants/loginConstants";

const initialState = {
    loginFormData: {},
    isLoading: false
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_FORM_CHANGE:
            return {
                ...state,
                loginFormData: { ...state.loginFormData, ...action.payload }
            }
        case SET_LOGIN_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default: 
            return state;
    }
}

export default loginReducer;