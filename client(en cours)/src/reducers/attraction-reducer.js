import { GET_ATTRACTIONS } from "../actions/attraction-action";


const initialState = {};

export default function attractionReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ATTRACTIONS:
            return action.payload;
    
        default:
            return state;
    }
}