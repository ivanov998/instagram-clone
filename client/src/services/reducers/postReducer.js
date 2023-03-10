import {
    OPEN_CREATE_POST_MODAL,
    CLOSE_CREATE_POST_MODAL
} from "../constants/postConstants";

const initialState = {
    isModalOpen: false
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_CREATE_POST_MODAL:
            return {
                ...state,
                isModalOpen: true
            }
        case CLOSE_CREATE_POST_MODAL:
            return {
                ...state,
                isModalOpen: false
            }
        default:
            return state
    }
}

export default postReducer;