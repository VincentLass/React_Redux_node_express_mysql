import { combineReducers } from "redux";
import attractionReducer from "./attraction-reducer";
import reservationReducer from "./reservation-reducer";
import connexionReducer from "./connexion-reducer";


export default combineReducers({
    attractionReducer,
    reservationReducer,
    connexionReducer
});