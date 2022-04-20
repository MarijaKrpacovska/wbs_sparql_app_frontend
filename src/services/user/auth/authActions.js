import * as AT from './authTypes';
import axios from 'axios';

export const authenticateUser = (email, password) => {
    const credentials = {
        email: email,
        password: password
    };
    return dispatch => {
        dispatch({
            type: AT.LOGIN_REQUEST
        });
        if(localStorage.getItem("jwtToken")!=null)
            localStorage.removeItem('jwtToken');

        axios.post("http://localhost:8090/user/authenticate", credentials)
            .then(response => {
                let token = response.data.token;
                let email = response.data.name;
                console.log(token)
                localStorage.setItem('jwtToken', token);
                localStorage.setItem('email', email);
                dispatch(success(true));
            })
            .catch(error => {
                dispatch(failure());
            });
    };
};

export const logoutUser = () => {
    return dispatch => {
        dispatch({
            type: AT.LOGOUT_REQUEST
        });
        localStorage.removeItem('jwtToken');
        dispatch(success(false));
    };
};

const success = isLoggedIn => {
    return {
        type: AT.SUCCESS,
        payload: isLoggedIn
    };
};

const failure = () => {
    return {
        type: AT.FAILURE,
        payload: false
    };
};