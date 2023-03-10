import {
    OPEN_POST_MODAL,
    CLOSE_POST_MODAL,
    POST_MODAL_FORM_CHANGE
} from "../constants/postConstants";

const initialState = {
    isPostModalOpen: false,
    modalFormData: {}
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
        default:
            return state
    }
}

export default postReducer;