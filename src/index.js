import React from "react";
import ReactDOM from "react-dom";
import App from "./Modules/App";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import { compose, applyMiddleware } from "redux";

import configureStore from "./store";
import createReducer from "./Reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore(
  createReducer(),
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
