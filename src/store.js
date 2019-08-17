import { createStore, combineReducers } from "redux";
import reducerRegistry from "./reducers/reducerRegistry";

const initialState = { m2Reducer: "Init" };

const combine = reducers => {
  const reducerNames = Object.keys(reducers);
  console.log("From Registry: ", reducerNames);

  Object.keys(initialState).forEach(item => {
    console.log(item);

    if (reducerNames.indexOf(item) === -1) {
      reducers[item] = (state = null) => state;
    }
  });
  console.log(reducers);

  return combineReducers(reducers);
};
console.log(reducerRegistry.getReducers());

const reducer = combine(reducerRegistry.getReducers());
const store = createStore(reducer);
console.log(store.getState());

export default store;

// export default reducerMap => {
//   const injectAsyncReducers = (store, name, reducers) => {
//     let asyncReducers;

//     if (typeof reducers === "function") {
//       asyncReducers = reducers;
//     }

//     if (typeof reducers === "object") {
//       asyncReducers = combineReducers(reducers);
//     }

//     store.asyncReducers[name] = asyncReducers;
//     store.replaceReducer(
//       combineReducers({
//         ...reducerMap,
//         ...store.asyncReducers
//       })
//     );
//   };

//   const store = createStore(combineReducers(reducerMap));
//   store.asyncReducers = {};
//   store.addDynamicModule = ({ name, reducers }) => {
//     console.info(`Registering module reducers for ${name}`);
//     injectAsyncReducers(store, name, reducers);
//   };
//   store.removeDynamicModule = name => {
//     console.info(`Unregistering module reducers for ${name}`);
//     const noopReducer = (state = {}) => state;
//     injectAsyncReducers(store, name, noopReducer);
//   };

//   return store;
// };
