import * as React from "react";
import PropTypes from "prop-types";
import {formatDuration} from "./utils";

const TabOverview = ({card}) => {
  const {director, stars, duration, genre, date} = card;
  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">{
            stars.map((star, index) => {
              return (
                <React.Fragment
                  key={`${star}-${index}`}>
                  {star}{index < stars.length - 1 ? `,` : ``}<br/>
                </React.Fragment>
              );
            })}</span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{formatDuration(duration)}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{date}</span>
        </p>
      </div>
    </div>
  );
};

TabOverview.propTypes = {
  card: PropTypes.shape({
    director: PropTypes.string,
    stars: PropTypes.array,
    duration: PropTypes.number,
    genre: PropTypes.string,
    date: PropTypes.number,
  }).isRequired,
};

export default TabOverview;
