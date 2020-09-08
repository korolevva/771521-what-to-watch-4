import * as React from 'react';
import {connect} from "react-redux";
import {Switch, Route, Router, Redirect} from "react-router-dom";
import Main from "../main/main";
import {getMoviesCards, getMovieCard, getReviews, getIsDataSending, getIsErrorLoading} from '../../reducers/data/selectors';
import {getAuthorizationStatus, getIsErrorAuth, getUserInfo} from '../../reducers/user/selectors';
import SignIn from "../sign-in/sign-in";
import {Operation as UserOperation} from "../../actions/userActions";
import {Operation as DataOperation} from "../../actions/dataActions";
import history from "../../history";
import {AppRoute} from '../../const';
import MyList from "../my-list/my-list";
import {Tab} from "../movie-card/movie-card";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import withPlayer from "../../hocs/with-player/with-player";
import MovieCard from "../movie-card/movie-card";
import FullScreenMovie from "../full-screen-movie/full-screen-movie";
import AddReview from "../add-review/add-review";
import {getMoviesCardsByGenre} from "../../reducers/genre/selectors";
import {getDisplayedMoviesCards} from "../../reducers/movie-card/selectors";
import PrivateRoute from "../private-route/private-route";
import {AuthorizationStatus} from '../../reducers/user/user';
import ErrorPage from '../error-page/error-page';
import {Movie, Review, User} from "../../types";

const FullScreenMovieWithPlayer = withPlayer(FullScreenMovie);
const MovieCardWithActiveItem = withActiveItem(MovieCard);

interface Props {
  authorizationStatus: string,
  isErrorAuth: boolean,
  login: (authData: {login: string, password: string}) => void,
  moviesCards: Array<Movie>,
  promoMovie: Movie,
  isDataSending: boolean,
  isErrorLoading: boolean,
  reviewSubmitHandler: (id: number, review: {rating: number, comment: string}) => void,
  reviews: Array<Review>,
  getMovieCardReviews: (movieCard: Movie) => void,
  user: User,
  moviesCardsByGenre: Array<Movie>,
  displayedMoviesCards: number,
}

const App: React.FunctionComponent<Props> = (props: Props) => {
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
