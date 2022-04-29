
import { ADD_ATTRACTION, DELETE_ATTRACTION, EDIT_ATTRACTION, GET_ATTRACTIONS } from "../actions/attraction-action";


const initialState = {};

export default function attractionReducer(state = initialState, action) {

   
    switch (action.type) {
        case GET_ATTRACTIONS:
            return action.payload;
        case EDIT_ATTRACTION:
            return state.map((attraction) => {
                if (attraction.id === action.payload.id) {
                    console.log(action.payload);
                    console.log({...attraction});
                    return  {
                        // ...action.payload,
                        ...attraction,
                        attraction: action.payload,
                    };
                } else return attraction;
            });
        case DELETE_ATTRACTION:
            return state.filter((attraction) => attraction.id !== action.payload.id);
            
        case ADD_ATTRACTION:
            return [...state, action.payload ]
            
        default:
            return state;
    }
}