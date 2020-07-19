import React from "react";
import PropTypes from "prop-types";

const TabOverview = ({card}) => {
  const {director, stars, duration, genres, date} = card;
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
          <span className="movie-card__details-value">{duration}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genres.join(`, `)}</span>
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
    duration: PropTypes.string,
    genres: PropTypes.array,
    date: PropTypes.string,
  }).isRequired,
};

export default TabOverview;
