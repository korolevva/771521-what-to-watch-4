import * as React from "react";
import PropTypes from "prop-types";

const VideoPlayer = React.forwardRef((props, ref) => {
  const {card, width, height, poster, muted, controls, autoPlay, className} = props;
  const {preview} = card;
  return (
    <video
      width={width}
      height={height}
      poster={poster}
      muted={muted}
      controls={controls}
      autoPlay={autoPlay}
      className={className}
      ref={ref}
    >
      <source src={preview} type="video/mp4" />
    </video>
  );
});

VideoPlayer.propTypes = {
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
  poster: PropTypes.string,
  muted: PropTypes.bool.isRequired,
  controls: PropTypes.bool.isRequired,
  autoPlay: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

VideoPlayer.displayName = `VideoPlayer`;

export default VideoPlayer;
