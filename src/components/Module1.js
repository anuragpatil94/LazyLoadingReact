import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import reducer from "./../reducers/module1";
class Module1 extends React.Component {
  render() {
    console.log(this.props);

    return (
      <div>
        Module1
        <Link to="/">Remove module</Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return state;
};

const reducers = {
  module1: reducer
};

const view = connect(
  mapStateToProps,
  { reducers }
)(Module1);

export default {
  name: "Module 1",
  view,
  reducers
};
