import React, {PureComponent} from 'react';


const withPlayer = (Component) => {
  class WithPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
      };

      this._timerId = null;
      this.handleCardMouseEnter = this.handleCardMouseEnter.bind(this);
      this.handleCardMouseLeave = this.handleCardMouseLeave.bind(this);
    }

    handleCardMouseEnter() {
      this._timerId = setTimeout(() => {
        this.setState({
          isPlaying: true,
        });
      }, 1000);
    }

    handleCardMouseLeave() {
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
          onMouseEnter={this.handleCardMouseEnter}
          onMouseLeave={this.handleCardMouseLeave}
        />
      );
    }
  }

  return WithPlayer;
};

export default withPlayer;
