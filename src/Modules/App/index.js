import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LazyLoadModule from "../LazyLoadModule";

class App extends React.Component {
  renderLazy(props) {
    console.log(props);

    return <LazyLoadModule {...props} resolve={() => import("./../Counter")} />;
  }

  render() {
    return (
      <Router>
        <div className="App">
          <h1>Hello</h1>
          <Link to="/counter">Load Counter Module</Link>
          {/* ROUTES HERE DATA WILL BE PROVIDED BY A CONFIG */}
          <Route path="/counter" render={props => this.renderLazy(props)} />
        </div>
      </Router>
    );
  }
}

export default App;
