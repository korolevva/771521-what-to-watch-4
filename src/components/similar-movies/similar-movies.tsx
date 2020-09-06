import * as React from "react";
import PropTypes from "prop-types";
import MovieCardPreview from "../movie-card-preview/movie-card-preview";
import withPlayer from "../../hocs/with-player/with-player";
const MovieCardPreviewWithPlayer = withPlayer(MovieCardPreview);

const SimilarMovies = ({moviesCards}) => {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <div className="catalog__movies-list">
        {moviesCards.map((card) => (
          <MovieCardPreviewWithPlayer
            key={`${card.id}`}
            card={card}
            moviesCards={moviesCards}
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
};

export default SimilarMovies;
