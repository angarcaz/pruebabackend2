import { combineReducers } from "redux";
import AccessReducer from './access/reducer';
import MusicReducer from "./music/reducer";

const rootReducer = combineReducers({
    AccessReducer,
    MusicReducer
})

export default rootReducer