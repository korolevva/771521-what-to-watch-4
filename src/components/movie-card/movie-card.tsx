import * as React from "react";
import Tabs from "../tabs/tabs";
import TabOverview from "../tab-overview/tab-overview";
import TabDetails from "../tab-details/tab-details";
import TabReviews from "../tab-reviews/tab-reviews";
import SimilarMovies from "../similar-movies/similar-movies";
import {AuthorizationStatus} from "../../reducers/user/user";
import Header from "../header/header";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";
import AddMyListButton from "../add-my-list-button/add-my-list-button";
import {Movie, Review, User} from "../../types";

interface Props {
  activeItem: string,
  authorizationStatus: string,
  getMovieCardReviews: (movieCard: Movie) => void,
  movieCard: Movie,
  movieCardId: number,
  moviesCards: Array<Movie>,
  onItemClick: (item: string) => void,
  reviews: Array<Review>,
  user: User,
}

const MAX_MOVIES_COUNT = 4;

export const Tab = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

const tabs = Object.values(Tab);

class MovieCard extends React.PureComponent<Props> {
  props: Props;

  constructor(props) {
    super(props);
    this._filteredMovies = this._filterByGenre(this.props.moviesCards, this.props.movieCard).slice(0, MAX_MOVIES_COUNT);

    const {getMovieCardReviews, movieCard} = this.props;
    getMovieCardReviews(movieCard);
  }

  _filteredMovies: Array<Movie>;

  _renderActiveTab() {
    const {reviews, activeItem, movieCard} = this.props;

    switch (activeItem) {
      case Tab.OVERVIEW:
        return (<TabOverview card={movieCard} />);
      case Tab.DETAILS:
        return (<TabDetails card={movieCard} />);
      case Tab.REVIEWS:
        return (<TabReviews reviews={reviews} />);
      default:
        return (<TabOverview card={movieCard} />);
    }
  }

  _filterByGenre(movies: Array<Movie>, currentMovie: Movie): Array<Movie> {
    const filteredMovies = movies.filter((movie) => {
      return (movie.genre === currentMovie.genre) && (movie !== currentMovie);
    });

    return filteredMovies;
  }

  getMovieCardById(moviesCards: Array<Movie>, id: number): Movie {
    return moviesCards.find((movieCard) => {
      return movieCard.id === id;
    });
  }

  render() {
    const {activeItem, onItemClick, authorizationStatus, movieCardId, user, movieCard} = this.props;
    const {id, background, title, poster, genre, date, isFavorite} = movieCard;

    return (
      <React.Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={background} alt="The Grand Budapest Hotel" />
            </div>

            <h1 className="visually-hidden">WTW</h1>
            <Header
              user={user}
              authorizationStatus={authorizationStatus}
            />

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{date}</span>
                </p>

                <div className="movie-card__buttons">
                  <Link className="btn btn--play movie-card__button" type="button"
                    to={`/films/${movieCardId}${AppRoute.PLAYER}`}
                  >
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </Link>

                  <AddMyListButton
                    isFavorite={isFavorite}
                    id={id}
                    authorizationStatus={authorizationStatus}
                  />

                  {authorizationStatus === AuthorizationStatus.AUTH
                    ? <Link to={`/films/${movieCardId}${AppRoute.REVIEW}`} className="btn movie-card__button">Add review</Link>
                    : ``
                  }
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={poster} alt="The Grand Budapest Hotel poster" width="218" height="327" />
              </div>

              <div className="movie-card__desc">
                <Tabs tabs={tabs} activeTab={activeItem} onTabClick={onItemClick}/>
                {this._renderActiveTab()}
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <SimilarMovies
            moviesCards={this._filteredMovies}
          />

          <footer className="page-footer">
            <div className="logo">
              <Link to={AppRoute.ROOT} className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

export default MovieCard;

