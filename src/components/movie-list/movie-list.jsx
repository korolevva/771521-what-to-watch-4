import React from "react";
import PropTypes from "prop-types";
import MovieCardPreview from "../movie-card-preview";

const MovieList = () => {

  return (
    <MovieCardPreview

    />
  );
};

MovieCardPreview.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  onMovieCardTitleClick: PropTypes.func.isRequired
};

export default MovieList;
