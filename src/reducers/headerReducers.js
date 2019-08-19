const INITIAL_STATE = {
  header: null,
  name: null
};

export default (state = INITIAL_STATE, action) => {
  return { ...state, header: "Visible", name: "Anurag Patil" };
};
