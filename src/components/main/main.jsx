import React from "react";
import MovieList from "../movie-list/movie-list.jsx";
import PropTypes from "prop-types";
import GenreList from "../genre-list/genre-list.jsx";
import Header from "../header/header.jsx";

const Main = ({authorizationStatus, promoMovie, onCardTitleClick, onCardClick, onPlayButtonClick, onSignInClick}) => {
  const {background, poster, title, genre, date} = promoMovie;
  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={background} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header
          authorizationStatus={authorizationStatus}
          onSignInClick={onSignInClick}
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
                <button className="btn btn--play movie-card__button" type="button"
                  onClick={() => onPlayButtonClick(promoMovie)}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
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
            onCardTitleClick={onCardTitleClick}
            onCardClick={onCardClick}
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
  onCardTitleClick: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onSignInClick: PropTypes.func.isRequired,
};

export default Main;
