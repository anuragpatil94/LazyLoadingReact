import * as React from "react";
import PropTypes from "prop-types";

export default class LazyLoadModule extends React.Component {
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

      const { name, reducers } = module;
      const { store } = this.context;
      console.log(store);

      if (name && store && reducers) store.addDynamicModule({ name, reducers });
      this.setState({ module });
    } catch (error) {
      this.setState({ hasError: error });
    }
  }

  componentWillUnmount() {
    const { module } = this.state;
    const { store } = this.context;
    const { name } = module;
    if (store && name) store.removeDynamicModule(name);
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

LazyLoadModule.contextType = {
  store: PropTypes.object
};

// LazyLoadModule.propTypes = {
//   resolve: PropTypes.instanceOf(Promise).isRequired
// };
