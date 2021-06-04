import { combineReducers } from "redux";
import { personajesStarWars } from "./StarWarsReducer";

const rootReducer = combineReducers({
    starWars: personajesStarWars
});

export default rootReducer;