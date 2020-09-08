import * as React from "react";
import {AppRoute} from '../../const';
import {Link} from "react-router-dom";
import {Movie} from "../../types";

interface Props {
  card: Movie,
  onMouseEnter: () => void,
  onMouseLeave: () => void,
  children: React.ReactNode,
}

const MovieCardPreview: React.FunctionComponent<Props> = ({card, onMouseEnter, onMouseLeave, children}:Props) => {
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

export default MovieCardPreview;
