import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Provider } from "react-redux";

import reducers from "./reducers";
import configureStore from "./store";

const store = configureStore(reducers);
console.log(store);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.querySelector("#root")
);
