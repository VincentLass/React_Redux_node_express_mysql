import axios from "axios";

export const GET_RESERVATIONS = "GET_RESERVATIONS";
export const ADD_RESERVATION = "ADD_RESERVATION";

export const addReservation = (data) => {
    return (dispatch) => {

        return axios
            .post("http://localhost:3000/reservations", data)
            .then((res) => {
                dispatch({type: ADD_RESERVATION, payload: data})
                console.log(data);
            })
            .catch((err) => console.log(err));
    };
};