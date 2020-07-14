import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";


export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = createRef();
  }

  render() {
    const {card} = this.props;
    const {imagePreview, preview} = card;
    return (
      <video
        width="280"
        height="175"
        poster={imagePreview}
        muted={true}
        ref={this._videoRef}
        controls={false}
        autoPlay={false}
      >
        <source src={preview} type="video/mp4" />
      </video>
    );
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    if (this.props.isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }
}

VideoPlayer.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number,
    imagePreview: PropTypes.string,
    preview: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  isPlaying: PropTypes.bool.isRequired,
};
