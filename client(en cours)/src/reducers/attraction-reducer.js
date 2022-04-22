
import { ADD_ATTRACTION, DELETE_ATTRACTION, EDIT_ATTRACTION, GET_ATTRACTIONS } from "../actions/attraction-action";


const initialState = {};

export default function attractionReducer(state = initialState, action) {

    // console.log(action.payload);
    // console.log(state);
   
    switch (action.type) {
        case GET_ATTRACTIONS:
            return action.payload;
        case EDIT_ATTRACTION:
            return state.map((attraction) => {
                if (attraction.id === action.payload.id) {
                    console.log(action.payload);
                    console.log({...attraction});
                    return  {
                        // ...attraction,
                        ...action.payload,
                    };
                } else return attraction;
            });
        case DELETE_ATTRACTION:
            return state.filter((attraction) => attraction.id !== action.payload.id);
            
        case ADD_ATTRACTION:
            // return action.payload;
            return state = state.push(action.payload);
            
        default:
            return state;
    }
}