import {
    OPEN_POST_MODAL,
    CLOSE_POST_MODAL,
    POST_MODAL_FORM_CHANGE
} from "../constants/postConstants";

export const openPostModal = () => async (dispatch) => {
    dispatch({ type: OPEN_POST_MODAL });
}

export const closePostModal = () => async (dispatch) => {
    dispatch({ type: CLOSE_POST_MODAL });
}

export const postModalFormChange = (name, value) => {
    let formData = {};
    formData[name] = value;

    return {
        type: POST_MODAL_FORM_CHANGE,
        payload: formData
    }
}