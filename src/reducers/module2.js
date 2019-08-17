import reducerRegistry from "./reducerRegistry";

const reducerName = "m2Reducer";

export default function reducer(
  state = "Initial State For Root Level Reducer"
) {
  console.log('M2');
  
  return state;
}

reducerRegistry.register(reducerName, reducer);
