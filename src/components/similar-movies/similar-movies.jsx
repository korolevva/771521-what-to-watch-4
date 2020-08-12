import React from "react";
import PropTypes from "prop-types";
import MovieCardPreview from "../movie-card-preview/movie-card-preview.jsx";
import withPlayer from "../../hocs/with-player/with-player.js";
const MovieCardPreviewWithPlayer = withPlayer(MovieCardPreview);

const SimilarMovies = ({moviesCards, onCardClick, onCardTitleClick}) => {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <div className="catalog__movies-list">
        {moviesCards.map((card) => (
          <MovieCardPreviewWithPlayer
            key={`${card.id}`}
            card={card}
            moviesCards={moviesCards}
            onCardTitleClick={onCardTitleClick}
            onCardClick={onCardClick}
            resetTimeStamp={true}
            muted={true}
            width="280"
            height="175"
            isPlaying={false}
            controls={false}
            poster={card.imagePreview}
            autoPlay={false}
          />
        ))}
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
