import React from "react";
import PropTypes from "prop-types";

const MovieCardPreview = ({name, link, onMovieCardTitleClick}) => {

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={link} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html" onClick={onMovieCardTitleClick}>{name}</a>
      </h3>
    </article>
  );
};

MovieCardPreview.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  onMovieCardTitleClick: PropTypes.func.isRequired
};

export default MovieCardPreview;
