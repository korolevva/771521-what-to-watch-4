import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";
import MovieList from "../movie-list/movie-list.jsx";
import {connect} from "react-redux";
import {getFavoriteMoviesCards} from "../../reducers/data/selectors";

const MyList = ({user, displayedMoviesCards, favoriteMovieCards}) => {

  return (
    <Fragment>
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link to={AppRoute.ROOT} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <h1 className="page-title user-page__title">My list</h1>

          <div className="user-block">
            <Link to={AppRoute.MY_LIST}>
              <div className="user-block__avatar">
                <img src={user.avatarUrl} alt="User avatar" width="63" height="63" />
              </div>
            </Link>
          </div>
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <MovieList
            moviesCards={favoriteMovieCards}
            displayedMoviesCards={displayedMoviesCards}
          />
        </section>

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
    </Fragment>
  );
};

MyList.propTypes = {
  user: PropTypes.shape({
    avatarUrl: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  displayedMoviesCards: PropTypes.number.isRequired,
  favoriteMovieCards: PropTypes.arrayOf(PropTypes.shape({
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
    stars: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
  })).isRequired,

};

const mapStateToProps = (store) => ({
  favoriteMovieCards: getFavoriteMoviesCards(store),
});

export default connect(mapStateToProps)(MyList);
