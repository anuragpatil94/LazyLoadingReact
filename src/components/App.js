import React from "react";
import LazyLoadModule from "./LazyLoadModule";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends React.Component {
  // Pass certain params that will load the Module
  renderLazy(props) {
    console.log(props);

    return <LazyLoadModule {...props} resolve={() => import("./Module1")} />;
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Link to="/module-1">Load Module via Route</Link>
        {/* ROUTES HERE DATA WILL BE PROVIDED BY A CONFIG */}
        <Route path="/module-1" render={props => this.renderLazy(props)} />
      </div>
    );
  }
}

export default App;
