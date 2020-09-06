import * as React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {setCurrentGenre} from "../../actions/genreActions";
import {resetDisplayedMoviesCount} from "../../actions/movieCardAction";
import {ALL_GENRES} from "../../const";
import {getCurrentGenre} from "../../reducers/genre/selectors";
import {getMoviesCards} from "../../reducers/data/selectors";

const generateGenres = (movies) => {
  const genres = new Set(movies.map((movie) => movie.genre));
  return [ALL_GENRES, ...genres];
};

const GenreList = ({currentGenre, moviesCards, onGenreClick}) => {
  const genres = generateGenres(moviesCards);

  return (
    <React.Fragment>
      <ul className="catalog__genres-list">
        {
          genres.map((movieGenre) => {
            return (
              <li key={movieGenre} className={`catalog__genres-item ${currentGenre === movieGenre ? `catalog__genres-item--active` : ``} `}>
                <a
                  href="#"
                  className="catalog__genres-link"
                  onClick={(evt) => {
                    evt.preventDefault();
                    onGenreClick(movieGenre, moviesCards);
                  }}
                >
                  {movieGenre}
                </a>
              </li>
            );
          })
        }
      </ul>
    </React.Fragment>
  );
};

const mapStateToProps = (store) => ({
  currentGenre: getCurrentGenre(store),
  moviesCards: getMoviesCards(store),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(setCurrentGenre(genre));
    dispatch(resetDisplayedMoviesCount());
  },
});

GenreList.propTypes = {
  currentGenre: PropTypes.string.isRequired,
  moviesCards: PropTypes.array.isRequired,
  onGenreClick: PropTypes.func.isRequired,
};

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
