import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: props.activeItem,
      };

      this._itemHandler = this._itemHandler.bind(this);
    }

    _itemHandler(item) {
      this.setState({
        activeItem: item,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          activeItem={this.state.activeItem}
          onItemClick={this._itemHandler}
        />
      );
    }
  }

  WithActiveItem.propTypes = {
    activeItem: PropTypes.string.isRequired
  };

  return WithActiveItem;
};

export default withActiveItem;
