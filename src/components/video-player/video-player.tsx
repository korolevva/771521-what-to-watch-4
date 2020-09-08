import * as React from "react";
import {Movie} from "../../types";

interface Props {
  card: Movie,
  width: string,
  height: string,
  poster: string,
  muted: boolean,
  controls: boolean,
  autoPlay: boolean,
  className: string,
}

type Ref = HTMLVideoElement

const VideoPlayer = React.forwardRef((props: Props, ref: React.RefObject<HTMLVideoElement>) => {
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

VideoPlayer.displayName = `VideoPlayer`;

export default VideoPlayer;
