import { EDIT_ATTRACTION, GET_ATTRACTIONS } from "../actions/attraction-action";


const initialState = {};

export default function attractionReducer(state = initialState, action) {
    console.log(action.payload);
    console.log(state);
   
    switch (action.type) {
        case GET_ATTRACTIONS:
            return action.payload;
        case EDIT_ATTRACTION:
            return state.map((attraction) => {
                // console.log(attraction);
                if (attraction.id === action.payload.id) {
                    console.log(action.payload);
                    console.log({...attraction});
                    return  {
                        // ...attraction,
                        ...action.payload,
                        // nom: action.payload.editNom,
                        // image: action.payload.editImage,
                        // description: action.payload.editDescription,
                        // id_admin: action.payload.admin.admin[0].id
                    };
                } else return attraction;
            })
            
        default:
            return state;
    }
}