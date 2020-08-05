import React, {PureComponent} from 'react';


const withPlayer = (Component) => {
  class WithPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
      };

      this._timerId = null;
      this._handleCardMouseEnter = this._handleCardMouseEnter.bind(this);
      this._handleCardMouseLeave = this._handleCardMouseLeave.bind(this);
    }

    _handleCardMouseEnter() {
      this._timerId = setTimeout(() => {
        this.setState({
          isPlaying: true,
        });
      }, 1000);
    }

    _handleCardMouseLeave() {
      this.setState({
        isPlaying: false,
      });
      clearTimeout(this._timerId);
    }

    componentWillUnmount() {
      clearTimeout(this._timerId);
    }

    render() {
      return (
        <Component
          {...this.props}
          isPlaying={this.state.isPlaying}
          onMouseEnter={this._handleCardMouseEnter}
          onMouseLeave={this._handleCardMouseLeave}
        />
      );
    }
  }

  return WithPlayer;
};

export default withPlayer;
