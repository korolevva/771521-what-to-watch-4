import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import MovieCardPreview from "../movie-card-preview/movie-card-preview.jsx";
import ShowMore from "../show-more/show-more.jsx";
import {increaseDisplayedMoviesCount} from "../../actions/movieCardAction.js";

import withPlayer from "../../hocs/with-player/with-player.js";

const MovieCardPreviewWithPlayer = withPlayer(MovieCardPreview);

const MovieList = ({moviesCards, displayedMoviesCards, onShowMoreButtonClick, onCardTitleClick, onCardClick}) => {
  const moviesCardsList = moviesCards
  .slice(0, displayedMoviesCards)
  .map((card) => (
    <MovieCardPreviewWithPlayer
      key={`${card.id}`}
      card={card}
      moviesCards={moviesCards}
      onCardTitleClick={onCardTitleClick}
      onCardClick={onCardClick}
    />
  ));
  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {moviesCardsList}
      </div>

      {moviesCards.length > displayedMoviesCards ? <ShowMore onShowMoreButtonClick={onShowMoreButtonClick} /> : ``}
    </React.Fragment>
  );
};


const mapStateToProps = (store) => ({
  moviesCards: store.genre.moviesByGenre,
  displayedMoviesCards: store.movieCard.displayedMoviesCards,
});


const mapDispatchToProps = (dispatch) => ({
  onShowMoreButtonClick() {
    dispatch(increaseDisplayedMoviesCount());
  }
});

MovieList.propTypes = {
  moviesCards: PropTypes.array.isRequired,
  displayedMoviesCards: PropTypes.number.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
