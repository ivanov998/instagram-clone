import {
    LOGIN_FORM_CHANGE,
    SET_LOGIN_LOADING
} from "../constants/loginConstants";

import axios from "axios";

export const loginFormChange = (name, value) => {
    let formData = {};
    formData[name] = value;

    return {
        type: LOGIN_FORM_CHANGE,
        payload: formData
    }
}

export const login = () =>  async (dispatch, getState) => {
    const user = getState().loginReducer.loginFormData;
    console.log(user);
    dispatch({ type: SET_LOGIN_LOADING, payload: true });

    try {
        const response = await axios.post('http://localhost:5000/api/auth/login', user);
        console.log(response);

    } catch(error) {
        console.log(error);
    } finally {
        dispatch({ type: SET_LOGIN_LOADING, payload: false });
    }
}