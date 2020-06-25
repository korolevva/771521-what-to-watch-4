import React from "react";
import PropTypes from "prop-types";
import MovieCardPreview from "../movie-card-preview/movie-card-preview.jsx";

const MovieList = ({moviesCards, onMovieCardTitleClick}) => {

  return (
    <React.Fragment>
      {moviesCards.map((card, i) => (
        <MovieCardPreview
          key={`${i}-${card.src}`}
          name={card.title}
          link={card.src}
          onMovieCardTitleClick={onMovieCardTitleClick}
        />
      ))}

    </React.Fragment>

  );
};

MovieCardPreview.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  onMovieCardTitleClick: PropTypes.func.isRequired
};

export default MovieList;
