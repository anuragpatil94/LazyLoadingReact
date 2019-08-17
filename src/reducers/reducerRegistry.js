/**
 * This allows Redux modules to be loaded on-demand, without
 * requiring all Redux modules to be bundled in th main chunk
 * for the store to correctly initialize.
 */
export class ReducerRegistry {
  constructor() {
    console.log("Reducer Registry");

    this._emitChange = null;
    this._reducers = {};
  }

  getReducers() {
    return { ...this._reducers };
  }

  register(name, reducer) {
    this._reducers = { ...this._reducers, [name]: reducer };
    if (this._emitChange) {
      this._emitChange(this.getReducers());
    }
  }
  setChangeListener(listener) {
    this._emitChange = listener;
  }
}

const reducerRegistry = new ReducerRegistry();
export default reducerRegistry;
