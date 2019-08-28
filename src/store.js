import { createStore } from "redux";
import userAddReducer from "./reducers/userAddReducer";

function configureStore(state = {
users : [{
id : '1',
name : 'AAA'
}]


}) {
return createStore(userAddReducer, state);
}

export default configureStore;
