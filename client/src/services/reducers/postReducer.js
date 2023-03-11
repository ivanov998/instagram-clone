import {
    OPEN_POST_MODAL,
    CLOSE_POST_MODAL,
    POST_MODAL_FORM_CHANGE,
    SET_MODAL_FORM_ERROR
} from "../constants/postConstants";

const initialState = {
    isPostModalOpen: false,
    modalFormData: {},
    modalFormError: ''
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_POST_MODAL:
            return {
                ...state,
                isPostModalOpen: true
            }
        case CLOSE_POST_MODAL:
            return {
                ...state,
                modalFormData: {},
                isPostModalOpen: false
            }
        case POST_MODAL_FORM_CHANGE:
            return {
                ...state,
                modalFormData: action.payload
            }
        case SET_MODAL_FORM_ERROR:
            return {
                ...state,
                modalFormError: action.payload
            }
        default:
            return state
    }
}

export default postReducer;