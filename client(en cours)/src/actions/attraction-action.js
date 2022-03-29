import axios from "axios";

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