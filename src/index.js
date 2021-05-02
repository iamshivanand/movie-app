import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";

//function logger(obj,next,action)
//redux internally will be doing something like this
// //logger(obj)(next)(action)
// const logger=function({dispatch,getState}){
//   return function(next){
//     return function(action){
//       console.log("ACTION_TYPE= ",action.type);
//       next(action);
//     }
//   }
// }

//second way of writting the logger
const logger = ({ dispatch, getState }) => (next) => (action) => {
  //logger code
  if (typeof action !== "function") {
    console.log("ACTION_TYPE= ", action.type);
  }

  next(action);
};

// const thunk=({dispatch,getState})=>(next)=>(action)=>{

//   if(typeof action === 'function'){
//     action(dispatch);
//     return;
//   }
//   next(action);
// }

//store need reducer as an argument
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
console.log("store", store);
// console.log("Before State", store.getState());

// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{ name: "superman" }],
// });
// console.log("After State", store.getState());

ReactDOM.render(<App store={store} />, document.getElementById("root"));
