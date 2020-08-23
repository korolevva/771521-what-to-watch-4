import React from 'react';
import {connect} from "react-redux";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import MovieCard from "../movie-card/movie-card.jsx";
import PropTypes from "prop-types";
import reviews from "../../mocks/reviews.js";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import withPlayer from "../../hocs/with-player/with-player.js";
import {Tab} from "../movie-card/movie-card.jsx";
import FullScreenMovie from "../full-screen-movie/full-screen-movie.jsx";
import {chooseMovie, playMovie, closeMovie} from '../../actions/movieCardAction.js';
import {getSelectedMovieCard, getPlayingMovieCard} from '../../reducers/movie-card/selectors.js';
import {getMoviesCards, getMovieCard} from '../../reducers/data/selectors.js';

const MovieCardWithActiveItem = withActiveItem(MovieCard);
const FullScreenMovieWithPlayer = withPlayer(FullScreenMovie);

const App = (props) => {
  const {
    moviesCards,
    promoMovie,
    selectedMovieCard,
    playingMovieCard,
    cardHandler,
    cardTitleHandler,
    playButtonClickHandler,
    exitButtonClickHandler
  } = props;

  let component;
  if (playingMovieCard) {
    component = <FullScreenMovieWithPlayer
      card={playingMovieCard}
      className={`player__video`}
      width={`280`}
      height={`175`}
      poster={playingMovieCard.poster}
      muted={false}
      controls={false}
      autoPlay={false}
      isPlaying={true}
      onExitButtonClick={exitButtonClickHandler}
    />;
  } else if (selectedMovieCard) {
    component = <MovieCardWithActiveItem
      activeItem={Tab.OVERVIEW}
      card={selectedMovieCard}
      moviesCards={moviesCards}
      reviews={reviews}
      onCardTitleClick={cardTitleHandler}
      onCardClick={cardHandler}
      onPlayButtonClick={playButtonClickHandler}
    />;
  } else {
    component = <Main
      promoMovie={promoMovie}
      onCardTitleClick={cardTitleHandler}
      onCardClick={cardHandler}
      onPlayButtonClick={playButtonClickHandler}
    />;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {component}
        </Route>
        <Route exact path="/card">
          {/* <MovieCardWithActiveItem
            activeItem={Tab.OVERVIEW}
            card={promoMovie}
            moviesCards={moviesCards}
            reviews={reviews}
            onCardTitleClick={cardTitleHandler}
            onCardClick={cardHandler}
            onPlayButtonClick={playButtonClickHandler}
          /> */}
        </Route>
      </Switch>
    </BrowserRouter >
  );
};


function mapStateToProps(store) {
  return {
    promoMovie: getMovieCard(store),
    moviesCards: getMoviesCards(store),
    selectedMovieCard: getSelectedMovieCard(store),
    playingMovieCard: getPlayingMovieCard(store),
  };
}

const mapDispatchToProps = (dispatch) => ({
  cardHandler(movieCard) {
    dispatch(chooseMovie(movieCard));
  },

  cardTitleHandler(movieCard) {
    dispatch(chooseMovie(movieCard));
  },

  playButtonClickHandler(movieCard) {
    dispatch(playMovie(movieCard));
  },

  exitButtonClickHandler() {
    dispatch(closeMovie(null));
  }

});

App.propTypes = {
  moviesCards: PropTypes.array.isRequired,
  promoMovie: PropTypes.shape({
    background: PropTypes.string,
    date: PropTypes.number,
    description: PropTypes.string,
    director: PropTypes.string,
    duration: PropTypes.number,
    genre: PropTypes.string,
    id: PropTypes.number,
    imagePreview: PropTypes.string,
    poster: PropTypes.string,
    preview: PropTypes.string,
    rating: PropTypes.number,
    ratingCount: PropTypes.number,
    stars: PropTypes.array,
    title: PropTypes.string,
  }),
  selectedMovieCard: PropTypes.shape({
    background: PropTypes.string,
    date: PropTypes.number,
    description: PropTypes.string,
    director: PropTypes.string,
    duration: PropTypes.number,
    genre: PropTypes.string,
    id: PropTypes.number,
    imagePreview: PropTypes.string,
    poster: PropTypes.string,
    preview: PropTypes.string,
    rating: PropTypes.number,
    ratingCount: PropTypes.number,
    stars: PropTypes.array,
    title: PropTypes.string,
  }),
  playingMovieCard: PropTypes.shape({
    background: PropTypes.string,
    date: PropTypes.number,
    description: PropTypes.string,
    director: PropTypes.string,
    duration: PropTypes.number,
    genre: PropTypes.string,
    id: PropTypes.number,
    imagePreview: PropTypes.string,
    poster: PropTypes.string,
    preview: PropTypes.string,
    rating: PropTypes.number,
    ratingCount: PropTypes.number,
    stars: PropTypes.array,
    title: PropTypes.string,
  }),
  cardHandler: PropTypes.func.isRequired,
  cardTitleHandler: PropTypes.func.isRequired,
  playButtonClickHandler: PropTypes.func.isRequired,
  exitButtonClickHandler: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
