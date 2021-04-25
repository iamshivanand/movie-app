import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";

//store need reducer as an argument
const store = createStore(rootReducer);
console.log("store", store);
// console.log("Before State", store.getState());

// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{ name: "superman" }],
// });
// console.log("After State", store.getState());

ReactDOM.render(<App store={store} />, document.getElementById("root"));
