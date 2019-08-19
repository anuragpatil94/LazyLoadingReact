import React from "react";
import { connect } from "react-redux";
import reducer from "./Reducers";

class Counter extends React.Component {
  incrementCounter() {
    console.log("Incremented");
  }

  render() {
    return (
      <div>
        <div>
          <span />
        </div>
        <div>
          <button onClick={this.incrementCounter}>Click To Increment</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return state;
};

export default {
  name: "Counter",
  view: connect(mapStateToProps)(Counter),
  reducer: reducer
};
