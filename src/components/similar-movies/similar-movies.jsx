import React from "react";
import PropTypes from "prop-types";
import MoviesList from "../movie-list/movie-list.jsx";

const SimilarMovies = ({moviesCards, onCardClick, onCardTitleClick}) => {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <div className="catalog__movies-list">
        <MoviesList
          moviesCards={moviesCards}
          onCardClick={onCardClick}
          onCardTitleClick={onCardTitleClick}
        />
      </div>
    </section>
  );

};

SimilarMovies.propTypes = {
  moviesCards: PropTypes.array.isRequired,
  onCardClick: PropTypes.func.isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
};

export default SimilarMovies;
