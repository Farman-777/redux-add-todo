//createStore is depricated
import { createStore, combineReducers } from "redux"
import todoReducers from "./Reducers/todo-reducers";

//todoReducer is both key and value we can modify it also
const rootReducer = combineReducers({ todos:todoReducers });

const store = createStore(rootReducer);

export default store;
