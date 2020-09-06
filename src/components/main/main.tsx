import React from "react";
import MovieList from "../movie-list/movie-list.jsx";
import PropTypes from "prop-types";
import GenreList from "../genre-list/genre-list.jsx";
import Header from "../header/header.jsx";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const.js";
import AddMyListButton from "../add-my-list-button/add-my-list-button.jsx";

const Main = ({authorizationStatus, promoMovie, user, moviesCardsByGenre, displayedMoviesCards}) => {
  const {id = 1, background, poster, title, genre, date, isFavorite = false} = promoMovie;
  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={background} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header
          user={user}
          authorizationStatus={authorizationStatus}
        />
        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={poster} alt={title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{date}</span>
              </p>

              <div className="movie-card__buttons">
                <Link className="btn btn--play movie-card__button" type="button"
                  to={`/films/${id}${AppRoute.PLAYER}`}
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList />

          <MovieList
            moviesCards={moviesCardsByGenre}
            displayedMoviesCards={displayedMoviesCards}
          />

        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment >
  );
};

Main.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  promoMovie: PropTypes.shape({
    background: PropTypes.string,
    backgroundColor: PropTypes.string,
    date: PropTypes.number,
    description: PropTypes.string,
    director: PropTypes.string,
    duration: PropTypes.number,
    genre: PropTypes.string,
    id: PropTypes.number,
    imagePreview: PropTypes.string,
    isFavorite: PropTypes.bool,
    poster: PropTypes.string,
    preview: PropTypes.string,
    rating: PropTypes.number,
    ratingCount: PropTypes.number,
    stars: PropTypes.array,
    title: PropTypes.string,
  }),
  user: PropTypes.shape({
    avatarUrl: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  moviesCardsByGenre: PropTypes.arrayOf(PropTypes.shape({
    background: PropTypes.string,
    date: PropTypes.number,
    description: PropTypes.string,
    director: PropTypes.string,
    duration: PropTypes.number,
    genre: PropTypes.string,
    id: PropTypes.number,
    imagePreview: PropTypes.string,
    isFavorite: PropTypes.bool,
    poster: PropTypes.string,
    preview: PropTypes.string,
    rating: PropTypes.number,
    ratingCount: PropTypes.number,
    stars: PropTypes.array,
    title: PropTypes.string,
  })).isRequired,
  displayedMoviesCards: PropTypes.number.isRequired,
};

export default Main;
