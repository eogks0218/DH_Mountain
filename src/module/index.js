import { combineReducers } from "redux";
import { mountain } from "./mountain";
import { loading } from "./loading";

const rootReducer = combineReducers({
    loading,
    mountain
});

export default rootReducer;