import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

class MovieCardPreview extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };

    this._timerId = null;
    this._onCardTitleClick = this.props.onCardTitleClick.bind(this);
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
  render() {
    const {card} = this.props;
    return (
      <article className="small-movie-card catalog__movies-card" onMouseEnter={this._handleCardMouseEnter} onMouseLeave={this._handleCardMouseLeave}>
        <div className="small-movie-card__image">
          <VideoPlayer
            card={card}
            isPlaying={this.state.isPlaying}
          />
        </div>

        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html" onClick={this._onCardTitleClick}>{card.title}</a>
        </h3>
      </article>
    );
  }
}

MovieCardPreview.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number,
    poster: PropTypes.string,
    title: PropTypes.string,
    preview: PropTypes.string,
  }).isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
};

export default MovieCardPreview;
