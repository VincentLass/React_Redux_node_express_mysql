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

export const getReservations = () => {
    return (dispatch) => {
        return axios
        .get("http://localhost:3000/admin/reservations")
        .then((res) => {
            dispatch({type: GET_RESERVATIONS, payload: res.data})
            console.log(res);
        })
        .catch((err) => console.log(err));
    }
}