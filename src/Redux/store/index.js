import {createStore} from "redux";
import {CounterReducer} from "../Reducers/CounterReducer";

const store = createStore(CounterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store