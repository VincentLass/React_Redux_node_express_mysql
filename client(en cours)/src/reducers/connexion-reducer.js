import { 
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
} from '../actions/types';

const admin = JSON.parse(localStorage.getItem('admin'));
console.log(admin);
const initialState = admin ? {loggedIn : true , admin} : {loggedIn : false, admin : null};

export default function connexionReducer (state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn : true,
                admin : action.payload.admin,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                loggedIn : false,
                admin : null,
            };
        case LOGOUT:
            return {
                ...state,
                loggedIn : false,
                admin : null,
            };
        default:
            return state;
    }
}