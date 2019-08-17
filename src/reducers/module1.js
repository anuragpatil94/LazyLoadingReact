import reducerRegistry from "./reducerRegistry";

const reducerName = "m1Reducer";

export default function reducer(
  state = "Initial State for Dynamic Module 1 Reducer"
) {
  return state;
}

reducerRegistry.register(reducerName, reducer);
