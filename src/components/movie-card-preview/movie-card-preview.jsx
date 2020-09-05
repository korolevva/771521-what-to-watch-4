import React from "react";
import PropTypes from "prop-types";
import {AppRoute} from '../../const.js';
import {Link} from "react-router-dom";

const MovieCardPreview = ({card, onMouseEnter, onMouseLeave, children}) => {
  return (
    <article
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="small-movie-card catalog__movies-card">
      <Link to={`${AppRoute.MOVIE_CARD}/${card.id}`}>
        <div className="small-movie-card__image">
          {children}
        </div>
      </Link>
      <h3 className="small-movie-card__title">
        <Link to={`${AppRoute.MOVIE_CARD}/${card.id}`}
          className="small-movie-card__link"
        >
          {card.title}
        </Link>
      </h3>
    </article>
  );
};

MovieCardPreview.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number,
    poster: PropTypes.string,
    title: PropTypes.string,
    preview: PropTypes.string,
  }).isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default MovieCardPreview;
