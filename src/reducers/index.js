import { combineReducers } from "redux";
import headerReducers from "./headerReducers";

export default function createReducer(asyncReducers) {
  console.log(asyncReducers);

  return combineReducers({
    headers: headerReducers,
    ...asyncReducers
  });
}
