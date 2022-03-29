import {  
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT } from './types';

import AuthService from '../services/auth-service';

export const login = (data) => {
    return (dispatch) => {
        return AuthService
            .login(data)
            .then((res) => {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {admin : data},
                });
                console.log(data);
            })
            .catch((error) => {
                dispatch({
                    type : LOGIN_FAIL
                })
                console.log(error);
            });
    };
};

export const logout = () => {
    return (dispatch) => {
        AuthService.logout();
        dispatch({
            type: LOGOUT,
        })
    };
};






// ////////////////////////////////////////////////////  Première version ///////////////////////////

// import axios from "axios";


// axios.defaults.withCredentials = true;

// export const POST_ADMIN = "POST_ADMIN";
// export const GET_ADMIN = "GET_ADMIN";

// export const postAdmin = (data) => {
//     return (dispatch) =>{
//         return axios
//             .post('http://localhost:3000/connexion', data)
//             .then((res) => {
//                 dispatch({type: POST_ADMIN, payload: data});
//                 // console.log(data);
//             })
//             .catch((err) => console.log(err));
//     };
// }

// export const getAdmin = () => {
//     return (dispatch) =>{
//         return axios
//             .get('http://localhost:3000/connexion')
//             .then((res) => {
//                 dispatch({type: GET_ADMIN, payload: res.data});
//                 console.log(res.data);
//             })
//             .catch((err) => console.log(err));
//     };
// };