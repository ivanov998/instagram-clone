import {
    SETUP_USER_BEGIN,
    SETUP_USER_SUCCESS,
    SETUP_USER_FAIL
} from "../constants/userConstants";

import {
    SET_USER_AUTHENTICATED,
    LOGOUT_USER
} from "../constants/authConstants";

import axios from "axios";
import Cookies from "js-cookie";


const usersApi = axios.create({
    baseURL: "http://localhost:5000/api/users",
    withCredentials: true,
    headers: {
        "Content-type": "application/json",
    },
});

export const getCurrentUser = () => async (dispatch, getState) => {

    const tokenCookie = Cookies.get('token');
    
    if (!tokenCookie) {
        return;
    }

    const userAuthenticated = getState().auth.authenticated;

    dispatch({ type: SETUP_USER_BEGIN });

    try {
        const response = await usersApi.get('current');
        
        if (!userAuthenticated) {
            dispatch({ type: SET_USER_AUTHENTICATED });
        }

        dispatch({ type: SETUP_USER_SUCCESS, payload: response.data });
    } catch(error) {
        dispatch({ type: LOGOUT_USER });
        dispatch({ type: SETUP_USER_FAIL });
    }
}