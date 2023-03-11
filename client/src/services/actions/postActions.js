import {
    OPEN_POST_MODAL,
    CLOSE_POST_MODAL,
    POST_MODAL_FORM_CHANGE,
    SET_MODAL_FORM_ERROR,
    SET_MODAL_REQUEST_ERROR
} from "../constants/postConstants";

import { allFieldsValidation } from "../utils/validation";

import axios from "axios";

const postsApi = axios.create({
    baseURL: "http://localhost:5000/api/posts",
    withCredentials: true,
    headers: {
        "Content-type": "application/json",
    },
});

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

export const postModalHandleSubmit = () => async (dispatch, getState) => {

    const modalFormData = getState().post.modalFormData;

    const rules = {
        caption: 'required|min:10|max:200'
    }

    const { isValid, errors } = allFieldsValidation(modalFormData, rules, {
        'required.caption': 'Caption is required.',
        'min.caption': 'Caption must be at least 10 characters.',
        'max.caption': 'Caption can be up to 200 characters.'
    });

    if (!isValid) {
        return dispatch({ type: SET_MODAL_FORM_ERROR, payload: errors });
    }

    const { caption } = modalFormData;

    postsApi.post("create", { caption }).catch((error) => {
        dispatch({ 
            type: SET_MODAL_REQUEST_ERROR, 
            payload: error.response ? error.response.data.msg : error.message
        })
    });

    dispatch(closePostModal());
}