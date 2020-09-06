import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../../components/video-player/video-player.jsx";
import {formatMovieDuration} from "./utils.js";

const withPlayer = (Component) => {
  class WithPlayer extends PureComponent {
    constructor(props) {
      super(props);
      this.videoRef = createRef();

      this.state = {
        isPlaying: this.props.isPlaying,
        progress: 0,
        videoDuration: 0,
        isLoading: true,
      };

      this._timerId = null;
      this.handleCardMouseEnter = this.handleCardMouseEnter.bind(this);
      this.handleCardMouseLeave = this.handleCardMouseLeave.bind(this);
      this.handlePlayButtonClick = this.handlePlayButtonClick.bind(this);
      this.handleFullScreenButtonClick = this.handleFullScreenButtonClick.bind(this);
      this.getPlaybackProgress = this.getPlaybackProgress.bind(this);
      this.getRestOfTime = this.getRestOfTime.bind(this);
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

    handlePlayButtonClick() {
      this.setState({isPlaying: !this.state.isPlaying});
    }

    handleFullScreenButtonClick() {
      const video = this.videoRef.current;
      video.requestFullscreen();
    }

    getPlaybackProgress() {
      return String((this.state.progress / this.state.videoDuration) * 100);
    }

    getRestOfTime() {
      return formatMovieDuration(this.state.videoDuration - this.state.progress);

    }

    componentDidMount() {
      const video = this.videoRef.current;
      video.onloadedmetadata = () => this.setState({videoDuration: Math.floor(video.duration)});
      video.ontimeupdate = () => this.setState({progress: video.currentTime});
    }

    componentDidUpdate() {
      const video = this.videoRef.current;
      if (this.state.isPlaying) {
        video.play();
      } else if (this.props.resetTimeStamp) {
        video.load();
      } else {
        video.pause();
      }
    }

    componentWillUnmount() {
      clearTimeout(this._timerId);

      const video = this.videoRef.current;

      video.oncanplaythrough = null;
      video.onplay = null;
      video.onpause = null;
      video.onload = null;
      video.ontimeupdate = null;
      video.src = ``;
      video.poster = ``;
    }

    render() {
      const {card, width, height, poster, muted, controls, autoPlay, className} = this.props;
      return (
        <Component
          {...this.props}
          isPlaying={this.state.isPlaying}
          onMouseEnter={this.handleCardMouseEnter}
          onMouseLeave={this.handleCardMouseLeave}
          onPlayButtonClick={this.handlePlayButtonClick}
          onFullScreenButtonClick={this.handleFullScreenButtonClick}
          getRestOfTime = {this.getRestOfTime}
          getPlaybackProgress = {this.getPlaybackProgress}
        >
          <VideoPlayer
            card={card}
            width={width}
            height={height}
            poster={poster}
            muted={muted}
            controls={controls}
            autoPlay={autoPlay}
            className={className}
            isPlaying={this.state.isPlaying}
            ref={this.videoRef}
          />
        </Component>

      );
    }
  }

  WithPlayer.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    card: PropTypes.shape({
      background: PropTypes.string,
      date: PropTypes.number,
      description: PropTypes.string,
      director: PropTypes.string,
      duration: PropTypes.number,
      genre: PropTypes.string,
      id: PropTypes.number,
      imagePreview: PropTypes.string,
      poster: PropTypes.string,
      preview: PropTypes.string,
      rating: PropTypes.number,
      ratingCount: PropTypes.number,
      stars: PropTypes.array,
      title: PropTypes.string,
    }).isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    poster: PropTypes.string.isRequired,
    muted: PropTypes.bool.isRequired,
    controls: PropTypes.bool.isRequired,
    autoPlay: PropTypes.bool.isRequired,
    className: PropTypes.string,
    resetTimeStamp: PropTypes.bool,
  };

  return WithPlayer;
};

export default withPlayer;
