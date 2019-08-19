import { createStore } from "redux";
import createReducer from "./Reducers";

export default (reducers, enhancers) => {
  const store = createStore(reducers, enhancers);
  store.asyncReducers = {};
  return store;
};

export function injectAsyncReducers(store, name, asyncReducers) {
  store.asyncReducers[name] = asyncReducers;
  store.replaceReducer(createReducer(asyncReducers));
  console.log(store.getState());
}
