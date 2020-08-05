import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Tabs from "../tabs/tabs.jsx";
import TabOverview from "../tab-overview/tab-overview.jsx";
import TabDetails from "../tab-details/tab-details.jsx";
import TabReviews from "../tab-reviews/tab-reviews.jsx";
import SimilarMovies from "../similar-movies/similar-movies.jsx";

const MAX_MOVIES_COUNT = 4;

export const Tab = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

const tabs = Object.values(Tab);

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this._filteredMovies = this._filterByGenre(this.props.moviesCards, this.props.card).slice(0, MAX_MOVIES_COUNT);
  }

  _renderActiveTab() {
    const {card, reviews, activeItem} = this.props;

    switch (activeItem) {
      case Tab.OVERVIEW:
        return (<TabOverview card={card} />);
      case Tab.DETAILS:
        return (<TabDetails card={card} />);
      case Tab.REVIEWS:
        return (<TabReviews reviews={reviews} />);
      default:
        return (<TabOverview card={card} />);
    }
  }

  _filterByGenre(movies, currentMovie) {
    const filteredMovies = movies.filter((movie) => {
      return movie.genre === currentMovie.genre;
    });

    return filteredMovies;
  }

  render() {
    const {card, onCardClick, onCardTitleClick, activeItem, onItemClick} = this.props;
    const {background, title, poster, genre, date} = card;

    return (
      <React.Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={background} alt="The Grand Budapest Hotel" />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
              <div className="logo">
                <a href="main.html" className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </a>
              </div>

              <div className="user-block">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </div>
            </header>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{date}</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button">
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
                  <a href="add-review.html" className="btn movie-card__button">Add review</a>
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
            onCardClick={onCardClick}
            onCardTitleClick={onCardTitleClick}
          />

          <footer className="page-footer">
            <div className="logo">
              <a href="main.html" className="logo__link logo__link--light">
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
      </React.Fragment>
    );
  }
}

MovieCard.propTypes = {
  card: PropTypes.shape({
    background: PropTypes.string,
    title: PropTypes.string,
    poster: PropTypes.string,
    genre: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    director: PropTypes.string,
    stars: PropTypes.array,
    rating: PropTypes.string,
    ratingCount: PropTypes.string,
  }).isRequired,

  moviesCards: PropTypes.array.isRequired,

  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.string,
    date: PropTypes.string,
    rating: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,

  onCardClick: PropTypes.func.isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
  activeItem: PropTypes.string.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default MovieCard;

