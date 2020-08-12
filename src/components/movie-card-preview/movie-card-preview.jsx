import React from "react";
import PropTypes from "prop-types";

const MovieCardPreview = ({card, onMouseEnter, onMouseLeave, onCardClick, onCardTitleClick, children}) => {
  return (
    <article
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => onCardClick(card)}
      className="small-movie-card catalog__movies-card">

      <div className="small-movie-card__image">
        {children}
      </div>

      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html"
          onClick={(evt) => {
            evt.preventDefault();
            onCardTitleClick(card);
          }}
        >{card.title}</a>
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
  onCardClick: PropTypes.func.isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default MovieCardPreview;
