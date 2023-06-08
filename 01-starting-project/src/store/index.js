import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter";
import { authReducer } from "./auth";


// without redux toolKit
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return { counter: state.counter + 1, showCounter: state.showCounter};
//   }
// //   you should NEVER mutate the state, once should always overwrite it like above.
// // doing it as below will although work fine but state is mutated and is not overwritten which might cause unexpected bugs
// // if (action.type === "increment") {
// // return state.counter++;
// // { counter: state.counter, showCounter: state.showCounter}};
// // we are mutating the state here and then passing it on. Its something we should never do. Always return a brand new object where
// // you copy any nested objects or arrays and create brand new values.
// // https://academind.com/tutorials/reference-vs-primitive-values/

//   if (action.type === "increase") {
//     return { counter: state.counter + action.amount, showCounter: state.showCounter };
//   }

//   if (action.type === "decrement") {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   }

//   if (action.type === "toggle") {
//     return {showCounter : !state.showCounter, counter: state.counter}
//   }

//   return state;
// };

const store = configureStore({ 
    reducer: {counter: counterReducer, auth: authReducer}
 });


export default store;
