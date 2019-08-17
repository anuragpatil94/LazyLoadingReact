import * as redux from "redux";

const { createStore, applyMiddleware, combineReducers } = redux;

export default reducerMap => {
  const injectAsyncReducers = (store, name, reducers) => {
    let asyncReducers;

    if (typeof reducers === "function") {
      asyncReducers = reducers;
    }

    if (typeof reducers === "object") {
      asyncReducers = combineReducers(reducers);
    }

    store.asyncReducers[name] = asyncReducers;
    store.replaceReducer(
      combineReducers({
        ...reducerMap,
        ...store.asyncReducers
      })
    );
  };

  const store = createStore(combineReducers(reducerMap));
  store.asyncReducers = {};
  store.addDynamicModule = ({ name, reducers }) => {
    console.info(`Registering module reducers for ${name}`);
    injectAsyncReducers(store, name, reducers);
  };
  store.removeDynamicModule = name => {
    console.info(`Unregistering module reducers for ${name}`);
    const noopReducer = (state = {}) => state;
    injectAsyncReducers(store, name, noopReducer);
  };

  return store;
};
