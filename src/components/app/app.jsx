import React from 'react';
import {connect} from "react-redux";
import {Switch, Route, Router} from "react-router-dom";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import {chooseMovie, playMovie, closeMovie} from '../../actions/movieCardAction.js';
import {getSelectedMovieCard, getPlayingMovieCard} from '../../reducers/movie-card/selectors.js';
import {getMoviesCards, getMovieCard, getReviews, getIsDataSending, getIsErrorLoading} from '../../reducers/data/selectors.js';
import {getAuthorizationStatus, getIsSingInSelected, getIsErrorAuth} from '../../reducers/user/selectors.js';
import SignIn from "../sign-in/sign-in.jsx";
import {Operation as UserOperation, renderSingInPage} from "../../actions/userActions.js";
import {Operation as DataOperation} from "../../actions/dataActions.js";
import history from "../../history.js";
import {AppRoute} from '../../const.js';
import MyList from "../my-list/my-list.jsx";

const App = (props) => {
  const {
    authorizationStatus,
    isErrorAuth,
    login,
    signInClickHandler,
    promoMovie,
    cardHandler,
    cardTitleHandler,
    playButtonClickHandler,
    reviewSubmitHandler,
  } = props;

  return (
    <Router
      history={history}
    >
      <Switch>
        <Route exact path={AppRoute.ROOT}
          render={() => {
            return <Main
              authorizationStatus={authorizationStatus}
              promoMovie={promoMovie}
              onCardTitleClick={cardTitleHandler}
              onCardClick={cardHandler}
              onPlayButtonClick={playButtonClickHandler}
              onSignInClick={signInClickHandler}
              onReviewSubmit={reviewSubmitHandler}
            />;
          }}
        />

        <Route exact path={AppRoute.LOGIN}

          render={() => {
            return <SignIn
              onSubmit={login}
              isErrorAuth={isErrorAuth}
            />;
          }}
        />

        <Route exact path={AppRoute.MY_LIST}

          render={() => {
            return <MyList />;
          }}
        />
      </Switch>
    </Router>
  );
};


function mapStateToProps(store) {
  return {
    promoMovie: getMovieCard(store),
    moviesCards: getMoviesCards(store),
    selectedMovieCard: getSelectedMovieCard(store),
    playingMovieCard: getPlayingMovieCard(store),
    authorizationStatus: getAuthorizationStatus(store),
    isSingInSelected: getIsSingInSelected(store),
    isErrorAuth: getIsErrorAuth(store),
    reviews: getReviews(store),
    isDataSending: getIsDataSending(store),
    isErrorLoading: getIsErrorLoading(store),
  };
}

const mapDispatchToProps = (dispatch) => ({
  signInClickHandler() {
    dispatch(renderSingInPage());
  },

  login(authData) {
    dispatch(UserOperation.login(authData));
  },

  cardHandler(movieCard) {
    dispatch(chooseMovie(movieCard));
    dispatch(DataOperation.loadReviews(movieCard.id));
  },

  cardTitleHandler(movieCard) {
    dispatch(chooseMovie(movieCard));
    dispatch(DataOperation.loadReviews(movieCard.id));
  },

  playButtonClickHandler(movieCard) {
    dispatch(playMovie(movieCard));
  },

  exitButtonClickHandler() {
    dispatch(closeMovie(null));
  },

  reviewSubmitHandler(movieId, review) {
    dispatch(DataOperation.sendReview(movieId, review));
  }

});

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  isSingInSelected: PropTypes.bool.isRequired,
  isErrorAuth: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
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
  signInClickHandler: PropTypes.func.isRequired,
  isDataSending: PropTypes.bool.isRequired,
  isErrorLoading: PropTypes.bool.isRequired,
  reviewSubmitHandler: PropTypes.func.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    comment: PropTypes.string,
    date: PropTypes.string,
    id: PropTypes.number,
    rating: PropTypes.number,
    user: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  }))
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
