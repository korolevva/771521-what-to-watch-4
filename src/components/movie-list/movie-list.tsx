import * as React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import MovieCardPreview from "../movie-card-preview/movie-card-preview";
import ShowMore from "../show-more/show-more";
import {increaseDisplayedMoviesCount} from "../../actions/movieCardAction";
import withPlayer from "../../hocs/with-player/with-player";

const MovieCardPreviewWithPlayer = withPlayer(MovieCardPreview);

const MovieList = ({displayedMoviesCards, moviesCards, onShowMoreButtonClick}) => {

  const moviesCardsList = moviesCards
  .slice(0, displayedMoviesCards)
  .map((card) => (
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

const mapDispatchToProps = (dispatch) => ({
  onShowMoreButtonClick() {
    dispatch(increaseDisplayedMoviesCount());
  }
});

MovieList.propTypes = {
  moviesCards: PropTypes.array.isRequired,
  displayedMoviesCards: PropTypes.number.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(MovieList);