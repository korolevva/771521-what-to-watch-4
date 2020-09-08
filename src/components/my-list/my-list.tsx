import * as React from "react";
import {Fragment} from "react";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";
import MovieList from "../movie-list/movie-list";
import {connect} from "react-redux";
import {getFavoriteMoviesCards} from "../../reducers/data/selectors";
import {Movie, User} from "../../types";

interface Props {
  user: User,
  displayedMoviesCards: number,
  favoriteMovieCards: Array<Movie>,
}

const MyList: React.FunctionComponent<Props> = ({user, displayedMoviesCards, favoriteMovieCards}:Props) => {
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

const mapStateToProps = (store) => ({
  favoriteMovieCards: getFavoriteMoviesCards(store),
});

export default connect(mapStateToProps)(MyList);
