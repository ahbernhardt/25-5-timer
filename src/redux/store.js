import { createStore } from "redux";
import timerReducer from "../redux/timerReducer";

export default createStore(timerReducer);

// import { createStore } from 'redux';
// import timerReducer from '../redux/timerReducer.js';
//
// export default createStore(
//     timerReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );
