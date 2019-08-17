import React from "react";
import { LazyLoadModule } from "./LazyLoadModule";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <LazyLoadModule resolve={() => import("./Module1")} />
      </div>
    );
  }
}

export default App;
