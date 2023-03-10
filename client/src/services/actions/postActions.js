import {
    OPEN_CREATE_POST_MODAL,
    CLOSE_CREATE_POST_MODAL
} from "../constants/postConstants";

export const openModal = () => async (dispatch) => {
    dispatch({ type: OPEN_CREATE_POST_MODAL });
}

export const closeModal = () => async (dispatch) => {
    dispatch({ type: CLOSE_CREATE_POST_MODAL });
}