import React from "react";
import PropTypes from "prop-types";
import {numericScoreToTextScore} from "./utils.js";

const TabOverview = ({card}) => {
  const {rating, ratingCount, description, director, stars} = card;
  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{numericScoreToTextScore(rating)}</span>
          <span className="movie-rating__count">{ratingCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {stars.join(`, `)}</strong></p>
      </div>
    </React.Fragment>
  );
};

TabOverview.propTypes = {
  card: PropTypes.shape({
    description: PropTypes.string,
    director: PropTypes.string,
    stars: PropTypes.array,
    rating: PropTypes.number,
    ratingCount: PropTypes.number,
  }).isRequired,
};

export default TabOverview;
