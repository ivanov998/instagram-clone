import {
    REGISTER_FORM_CHANGE,
    SET_REGISTER_LOADING
} from "../constants/registerConstants";

import axios from "axios";

export const registerFormChange = (name, value) => {
    let formData = {};
    formData[name] = value;

    return {
        type: REGISTER_FORM_CHANGE,
        payload: formData
    }
}

export const register = () =>  async (dispatch, getState) => {

    const registerData = getState().registerReducer.registerFormData;

    dispatch({ type: SET_REGISTER_LOADING, payload: true });

    try {
        const response = await axios.post('http://localhost:5000/api/auth/register', registerData);
        console.log(response.data.msg);

    } catch(error) {
        console.log(error);
    } finally {
        dispatch({ type: SET_REGISTER_LOADING, payload: false });
    }
}