import * as React from "react";
import MovieCardPreview from "../movie-card-preview/movie-card-preview";
import withPlayer from "../../hocs/with-player/with-player";
import {Movie} from "../../types";

const MovieCardPreviewWithPlayer = withPlayer(MovieCardPreview);

interface Props {
  moviesCards: Array<Movie>,
}

const SimilarMovies: React.FunctionComponent<Props> = ({moviesCards}:Props) => {
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

export default SimilarMovies;
