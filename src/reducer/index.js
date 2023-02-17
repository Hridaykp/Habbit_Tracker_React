import habitReducers from "./homeReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  habitReducers,
});

export default rootReducer;
