import {
    AUTH_FORM_CHANGE,
    SET_AUTH_LOADING,
    SET_AUTH_FORM_ERROR,
    SET_AUTH_ERROR,
    CLEAR_ERRORS,
    SET_USER_AUTHENTICATED,
    CLEAR_USER_AUTHENTICATED,
    SETUP_USER_BEGIN,
    SETUP_USER_SUCCESS,
    SETUP_USER_FAIL
} from "../constants/authConstants";
import { allFieldsValidation } from "../utils/validation";

import axios from "axios";
import Cookies from 'js-cookie';

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

    dispatch({ type: CLEAR_ERRORS });

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
        await authApi.post('login', user);
    } catch(error) {
        return dispatch({ 
            type: SET_AUTH_ERROR,
            payload: error.response ? error.response.data.msg : error.message 
        });
    } finally {
        dispatch(getCurrentUser())
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
        await authApi.post('register', registerData);
    } catch(error) {
        return dispatch({ 
            type: SET_AUTH_ERROR,
            payload: error.response ? error.response.data.msg : error.message 
        });
    } finally {
        dispatch({ type: SET_AUTH_LOADING, payload: false });
    }
}

export const logout = () => async (dispatch, getState) => {
    await authApi.get('logout');
    return dispatch({ type: CLEAR_USER_AUTHENTICATED });
}

export const getCurrentUser = () => async (dispatch, getState) => {

    const tokenCookie = Cookies.get('token');
    
    if (!tokenCookie) {
        return;
    }

    dispatch({ type: SETUP_USER_BEGIN });

    try {
        const response = await authApi.get('getCurrentUser');
        dispatch({ type: SET_USER_AUTHENTICATED });
        dispatch({ type: SETUP_USER_SUCCESS, payload: response.data });
    } catch(error) {
        dispatch({ type: CLEAR_USER_AUTHENTICATED });
        dispatch({ type: SETUP_USER_FAIL });
    }
}