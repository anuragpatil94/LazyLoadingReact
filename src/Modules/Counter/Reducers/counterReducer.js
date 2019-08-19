const INITIAL_STATE = {
  Value: 0
};

// When application starts reducer is called to initialize it.
// If the reducer gets called with argument value of UNDEFINED,
// the state will be set to INITIAL_STATE
export default (state = INITIAL_STATE, action) => {
  console.log(state);

  return state;
};
