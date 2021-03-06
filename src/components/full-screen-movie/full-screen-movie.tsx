import * as React from "react";
import history from "../../history";

interface Props {
  isPlaying: boolean,
  onPlayButtonClick: () => void,
  onFullScreenButtonClick: () => void,
  getPlaybackProgress: () => string,
  getRestOfTime: () => string,
  children: React.ReactNode,
}


const FullScreenMovie: React.FunctionComponent<Props> = (props: Props) => {
  const {isPlaying, onPlayButtonClick, onFullScreenButtonClick, getPlaybackProgress, getRestOfTime, children} = props;
  return (
    <div className="player">
      {children}

      <button type="button" className="player__exit"
        onClick={() => history.goBack()}
      >Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={getPlaybackProgress()} max="100"></progress>
            <div className="player__toggler" style={{left: `${getPlaybackProgress()}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{getRestOfTime()}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={onPlayButtonClick}>
            {isPlaying
              ?
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              :
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
            }
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen"
            onClick={onFullScreenButtonClick}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullScreenMovie;
