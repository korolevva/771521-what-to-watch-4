import * as React from "react";
import {Subtract} from "utility-types";

interface State {
  activeItem: string,
}

interface InjectingProps {
  activeItem: string,
  onItemClick: (item: string) => void,
}

const withActiveItem = (Component) => {

  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;
  class WithActiveItem extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: props.activeItem,
      };

      this.itemHandler = this.itemHandler.bind(this);
    }

    itemHandler(item) {
      this.setState({
        activeItem: item,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          activeItem={this.state.activeItem}
          onItemClick={this.itemHandler}
        />
      );
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
