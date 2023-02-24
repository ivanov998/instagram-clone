import {
    AUTH_FORM_CHANGE,
    SET_AUTH_LOADING
} from "../constants/authConstants";

import axios from "axios";

const authApi = axios.create({
    baseURL: "http://localhost:5000/api/auth",
    withCredentials: true,
    headers: {
        "Content-type": "application/json",
    },
});

export const authFormChange = (name, value) => {
    let formData = {};
    formData[name] = value;

    return {
        type: AUTH_FORM_CHANGE,
        payload: formData
    }
}

export const login = () =>  async (dispatch, getState) => {

    const user = getState().authReducer.authFormData;

    dispatch({ type: SET_AUTH_LOADING, payload: true });
    
    try {
        const response = await authApi.post('login', user);
        console.log(response.data.msg);
    } catch(error) {
        console.log(error.response.data.msg);
    } finally {
        dispatch({ type: SET_AUTH_LOADING, payload: false });
    }
}

export const register = () =>  async (dispatch, getState) => {

    const registerData = getState().authReducer.authFormData;

    dispatch({ type: SET_AUTH_LOADING, payload: true });

    try {
        const response = await authApi.post('register', registerData);
        console.log(response.data.msg);

    } catch(error) {
        console.log(error);
    } finally {
        dispatch({ type: SET_AUTH_LOADING, payload: false });
    }
}