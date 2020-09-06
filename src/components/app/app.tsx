import * as React from 'react';
import {connect} from "react-redux";
import {Switch, Route, Router, Redirect} from "react-router-dom";
import Main from "../main/main.jsx";
// import PropTypes from "prop-types";
import {getMoviesCards, getMovieCard, getReviews, getIsDataSending, getIsErrorLoading} from '../../reducers/data/selectors.js';
import {getAuthorizationStatus, getIsErrorAuth, getUserInfo} from '../../reducers/user/selectors.js';
import SignIn from "../sign-in/sign-in.jsx";
import {Operation as UserOperation} from "../../actions/userActions.js";
import {Operation as DataOperation} from "../../actions/dataActions.js";
import history from "../../history.js";
import {AppRoute} from '../../const.js';
import MyList from "../my-list/my-list.jsx";
import {Tab} from "../movie-card/movie-card.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import withPlayer from "../../hocs/with-player/with-player.js";
import MovieCard from "../movie-card/movie-card.jsx";
import FullScreenMovie from "../full-screen-movie/full-screen-movie.jsx";
import AddReview from "../add-review/add-review.jsx";
import {getMoviesCardsByGenre} from "../../reducers/genre/selectors.js";
import {getDisplayedMoviesCards} from "../../reducers/movie-card/selectors.js";
import PrivateRoute from "../private-route/private-route.jsx";
import {AuthorizationStatus} from '../../reducers/user/user.js';
import ErrorPage from '../error-page/error-page.jsx';

const FullScreenMovieWithPlayer = withPlayer(FullScreenMovie);
const MovieCardWithActiveItem = withActiveItem(MovieCard);

const App = (props) => {
  const {
    authorizationStatus,
    isErrorAuth,
    login,
    moviesCards,
    promoMovie,
    reviews,
    reviewSubmitHandler,
    getMovieCardReviews,
    isDataSending,
    isErrorLoading,
    user,
    moviesCardsByGenre,
    displayedMoviesCards,
  } = props;

  if (isErrorLoading) {
    return <ErrorPage />;
  }

  return (
    <Router
      history={history}
    >
      <Switch>
        <Route exact path={AppRoute.ROOT}
          render={() => {
            return <Main
              user={user}
              authorizationStatus={authorizationStatus}
              promoMovie={promoMovie}
              moviesCardsByGenre={moviesCardsByGenre}
              displayedMoviesCards={displayedMoviesCards}
            />;
          }}
        />

        <Route exact path={AppRoute.LOGIN}
          render={() => {
            return authorizationStatus === AuthorizationStatus.NO_AUTH
              ? <SignIn
                onSubmit={login}
                isErrorAuth={isErrorAuth}
              />
              : <Redirect
                to={AppRoute.ROOT}
              />;
          }}
        />

        <PrivateRoute
          exact
          path={AppRoute.MY_LIST}
          authorizationStatus={authorizationStatus}
          render={() => {
            return <MyList
              user={user}
              displayedMoviesCards={displayedMoviesCards}
            />;
          }}
        />

        <Route exact path={`${AppRoute.MOVIE_CARD}/:id`}
          render={({match}) => {
            const movieCardId = Number(match.params.id);
            const movieCard = moviesCards.find((card) => card.id === movieCardId);
            return <MovieCardWithActiveItem
              user={user}
              movieCardId={Number(match.params.id)}
              movieCard={movieCard}
              activeItem={Tab.OVERVIEW}
              moviesCards={moviesCards}
              reviews={reviews}
              authorizationStatus={authorizationStatus}
              getMovieCardReviews={getMovieCardReviews}
            />;
          }}
        />

        <Route exact path={`/films/:id${AppRoute.PLAYER}`}
          render={({match}) => {
            const movieCardId = Number(match.params.id);
            const movieCard = moviesCards.find((card) => card.id === movieCardId);

            return <FullScreenMovieWithPlayer
              card={movieCard}
              className={`player__video`}
              width={`280`}
              height={`175`}
              poster={movieCard.poster}
              muted={false}
              controls={false}
              autoPlay={false}
              isPlaying={true}
            />;
          }}
        />

        <Route exact path={`/films/:id${AppRoute.REVIEW}`}
          render={({match}) => {
            const movieCardId = Number(match.params.id);
            const movieCard = moviesCards.find((card) => card.id === movieCardId);

            return <AddReview
              user={user}
              movieCard={movieCard}
              movieCardId={movieCardId}
              isDataSending={isDataSending}
              isErrorLoading={isErrorLoading}
              onReviewSubmit={reviewSubmitHandler}
            />;
          }}
        />

        <Route
          render={() => <ErrorPage />}
        />
      </Switch>
    </Router>
  );
};

// App.propTypes = {
//   authorizationStatus: PropTypes.string.isRequired,
//   isErrorAuth: PropTypes.bool.isRequired,
//   login: PropTypes.func.isRequired,
//   moviesCards: PropTypes.arrayOf(PropTypes.shape({
//     background: PropTypes.string,
//     date: PropTypes.number,
//     description: PropTypes.string,
//     director: PropTypes.string,
//     duration: PropTypes.number,
//     genre: PropTypes.string,
//     id: PropTypes.number,
//     imagePreview: PropTypes.string,
//     isFavorite: PropTypes.bool,
//     poster: PropTypes.string,
//     preview: PropTypes.string,
//     rating: PropTypes.number,
//     ratingCount: PropTypes.number,
//     stars: PropTypes.arrayOf(PropTypes.string),
//     title: PropTypes.string,
//   })),
//   promoMovie: PropTypes.shape({
//     background: PropTypes.string,
//     date: PropTypes.number,
//     description: PropTypes.string,
//     director: PropTypes.string,
//     duration: PropTypes.number,
//     genre: PropTypes.string,
//     id: PropTypes.number,
//     imagePreview: PropTypes.string,
//     isFavorite: PropTypes.bool,
//     poster: PropTypes.string,
//     preview: PropTypes.string,
//     rating: PropTypes.number,
//     ratingCount: PropTypes.number,
//     stars: PropTypes.arrayOf(PropTypes.string),
//     title: PropTypes.string,
//   }),
//   isDataSending: PropTypes.bool.isRequired,
//   isErrorLoading: PropTypes.bool.isRequired,
//   reviewSubmitHandler: PropTypes.func.isRequired,
//   reviews: PropTypes.arrayOf(PropTypes.shape({
//     comment: PropTypes.string,
//     date: PropTypes.string,
//     id: PropTypes.number,
//     rating: PropTypes.number,
//     user: PropTypes.shape({
//       id: PropTypes.number,
//       name: PropTypes.string,
//     })
//   })),
//   getMovieCardReviews: PropTypes.func.isRequired,
//   user: PropTypes.shape({
//     avatarUrl: PropTypes.string,
//     email: PropTypes.string,
//     id: PropTypes.number,
//     name: PropTypes.string,
//   }).isRequired,
//   moviesCardsByGenre: PropTypes.arrayOf(PropTypes.shape({
//     background: PropTypes.string,
//     date: PropTypes.number,
//     description: PropTypes.string,
//     director: PropTypes.string,
//     duration: PropTypes.number,
//     genre: PropTypes.string,
//     id: PropTypes.number,
//     imagePreview: PropTypes.string,
//     isFavorite: PropTypes.bool,
//     poster: PropTypes.string,
//     preview: PropTypes.string,
//     rating: PropTypes.number,
//     ratingCount: PropTypes.number,
//     stars: PropTypes.arrayOf(PropTypes.string),
//     title: PropTypes.string,
//   })).isRequired,
//   displayedMoviesCards: PropTypes.number.isRequired,
// };


function mapStateToProps(store) {
  return {
    promoMovie: getMovieCard(store),
    moviesCards: getMoviesCards(store),
    authorizationStatus: getAuthorizationStatus(store),
    isErrorAuth: getIsErrorAuth(store),
    reviews: getReviews(store),
    isDataSending: getIsDataSending(store),
    isErrorLoading: getIsErrorLoading(store),
    user: getUserInfo(store),
    moviesCardsByGenre: getMoviesCardsByGenre(store),
    displayedMoviesCards: getDisplayedMoviesCards(store),
  };
}

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },

  reviewSubmitHandler(movieId, review) {
    dispatch(DataOperation.sendReview(movieId, review));
  },

  getMovieCardReviews(movieCard) {
    dispatch(DataOperation.loadReviews(movieCard.id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
