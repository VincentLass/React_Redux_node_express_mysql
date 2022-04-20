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
    }
}

// export const editAttraction = (data) => {
//     // console.log({...data});
//     return (dispatch) => {
//         return axios.post(`http://localhost:3000/admin/edit-attraction`, 
//             data: {...data},
//         , console.log(attraction))
//         .then((res) => {
//             dispatch({ type: EDIT_ATTRACTION, payload: {...data} });
//         })
//         .catch((err) => console.log(err));
//     }
// }