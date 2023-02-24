import {
    AUTH_FORM_CHANGE,
    SET_AUTH_LOADING,
    SET_AUTH_FORM_ERROR
} from "../constants/authConstants";
import { allFieldsValidation } from "../utils/validation";

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

export const login = () => async (dispatch, getState) => {

    const user = getState().authReducer.authFormData;

    const rules = {
        login: 'required|min:6',
        password: 'required|min:6'
    }

    const { isValid, errors } = allFieldsValidation(user, rules, {
        'required.login': 'Username or email is required.',
        'min.login': 'Username or email must be at least 6 characters.',
        'required.password': 'Password is required.',
        'min.password': 'Password must be at least 6 characters.'
    });
  
    if (!isValid) {
        return dispatch({ type: SET_AUTH_FORM_ERROR, payload: errors });
    }

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

export const register = () => async (dispatch, getState) => {

    const registerData = getState().authReducer.authFormData;

    const rules = {
        username: 'required|min:6',
        email: 'required|email',
        password: 'required|min:6'
    }

    const { isValid, errors } = allFieldsValidation(registerData, rules, {
        'required.username': 'Username is required.',
        'min.username': 'Username or email must be at least 6 characters.',
        'required.email': 'Email is required.',
        'email.email': 'Email format is invalid.',
        'required.password': 'Password is required.',
        'min.password': 'Password must be at least 6 characters.'
    });

    if (!isValid) {
        return dispatch({ type: SET_AUTH_FORM_ERROR, payload: errors });
    }

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

export const logout = () => async () => {
    await authApi.get('logout');
}