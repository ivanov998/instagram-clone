import {
    REGISTER_FORM_CHANGE,
    SET_REGISTER_LOADING
} from "../constants/registerConstants";

const initialState = {
    registerFormData: {},
    isLoading: false
}

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_FORM_CHANGE:
            return {
                ...state,
                registerFormData: { ...state.registerFormData, ...action.payload }
            }
        case SET_REGISTER_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default: 
            return state;
    }
}

export default registerReducer;