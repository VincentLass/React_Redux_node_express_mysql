import axios from "axios";
import attractionReducer from "../reducers/attraction-reducer";

export const GET_ATTRACTIONS = "GET_ATTRACTIONS";
export const EDIT_ATTRACTION = "EDIT_ATTRACTION";
export const DELETE_ATTRACTION = "DELETE_ATTRACTION";
export const ADD_ATTRACTION = "ADD_ATTRACTION";

export const getAttractions = () => {
    return (dispatch) =>{
        return axios
            .get('http://localhost:3000/attractions')
            .then((res) => {
                dispatch({type: GET_ATTRACTIONS, payload: res.data});
            })
            .catch((err) => console.log(err));
    };
};

export const editAttraction = (data) => {
    console.log(data);
    return (dispatch) => {
        return axios({
            method: "POST",
            url:`http://localhost:3000/admin/edit-attraction`,
            data: {...data},
        })
        .then((res) => {
            dispatch({ type: EDIT_ATTRACTION, payload: {...data}});
        })
        .catch((err) => console.log(err));
    };
};

export const deleteAttraction = (id) => {
    
    return (dispatch) => {
        return axios({
            method: "POST",
            url:`http://localhost:3000/admin/edit-attraction/${id}`,
        })
        .then((res) => {
            dispatch({ type: DELETE_ATTRACTION, payload: id })
        })
        .catch((err) => console.log(err));
    };
};

export const addAttraction = (data) => {
    return (dispatch) => {
        return axios
        .post(`http://localhost:3000/admin/add-attraction`, data)
        .then((res) => {
            dispatch({type: ADD_ATTRACTION, payload: data});
        })
        .catch((err) => console.log(err));
    };
};
