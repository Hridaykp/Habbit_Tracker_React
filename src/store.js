// import createStore which holds the state tree
import { legacy_createStore as createStore } from "redux";

// importing root reducer 
import rootReducer from "./reducer/index";


// create a redux store 
const store = createStore(rootReducer);

export default store;