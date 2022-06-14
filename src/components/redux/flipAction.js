import { createStore } from "redux";
import { TOGGLE } from "./flipInfo";
let intialState = true;
const reducerFun = (currentState = intialState, action) => {
  switch (action.type) {
    case TOGGLE:
      return !currentState;
    default:
      return currentState;
  }
};

const store = createStore(reducerFun);
export default store;
