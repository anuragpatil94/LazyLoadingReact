import * as React from "react";
import { ReactReduxContext } from "react-redux";
import { injectAsyncReducers } from "./../store";

export default class LazyLoadModule extends React.Component {
  static contextType = ReactReduxContext;

  constructor() {
    super();
    this.state = {
      module: null
    };
  }

  componentDidCatch(error) {
    this.setState({ hasError: error });
  }

  async componentDidMount() {
    try {
      console.log(this.props);
      const { resolve } = this.props;
      const { default: module } = await resolve();
      console.log(module);
      const { name, reducer } = module;
      console.log(this.context);

      injectAsyncReducers(this.context.store, name, reducer);

      this.setState({ module });
    } catch (error) {
      this.setState({ hasError: error });
    }
  }

  render() {
    const { module, hasError } = this.state;
    const { resolve, ...rest } = this.props;
    if (hasError) return <div>{hasError.message}</div>;
    if (!module) return <div>Loading module...</div>;
    if (module.view) return React.createElement(module.view, rest);
    return <div>Module loaded</div>;
  }
}

// LazyLoadModule.contextTypes = {
//   store: PropTypes.object
// };

// LazyLoadModule.propTypes = {
//   resolve: PropTypes.instanceOf(Promise).isRequired
// };
