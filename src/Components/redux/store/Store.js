import { combineReducers, createStore } from "redux";
import { expenseReducer } from "../reducers/Reducers";

const reducer= combineReducers({
    expenses:expenseReducer,
    
});

const initialState={
    expenseList:[],
    query:"ee"
};
const store= createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;