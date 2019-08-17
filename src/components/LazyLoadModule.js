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

      // const { name, reducers } = module;
      console.log(module);

      this.setState({ module });
    } catch (error) {
      this.setState({ hasError: error });
    }
  }

  // componentWillUnmount() {
  //   const { module } = this.state;
  // }

  render() {
    const { module, hasError } = this.state;
    const { resolve, ...rest } = this.props;
    if (hasError) return <div>{hasError.message}</div>;
    if (!module) return <div>Loading module...</div>;

    if (module.view) return React.createElement(module.view, rest);

    return <div>Module loaded</div>;
  }
}

LazyLoadModule.contextTypes = {
  store: PropTypes.object
};

// LazyLoadModule.propTypes = {
//   resolve: PropTypes.instanceOf(Promise).isRequired
// };
