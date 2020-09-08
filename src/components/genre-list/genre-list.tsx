import * as React from "react";
import {connect} from "react-redux";
import {setCurrentGenre} from "../../actions/genreActions";
import {resetDisplayedMoviesCount} from "../../actions/movieCardAction";
import {ALL_GENRES} from "../../const";
import {getCurrentGenre} from "../../reducers/genre/selectors";
import {getMoviesCards} from "../../reducers/data/selectors";
import {Movie} from "../../types";

interface Props {
  currentGenre: string,
  moviesCards: Array<Movie>,
  onGenreClick: (genre: string) => void,
}

const generateGenres = (movies: Array<Movie>): Array<string> => {
  const genres = new Set(movies.map((movie) => movie.genre));
  return [ALL_GENRES, ...genres];
};

const GenreList: React.FunctionComponent<Props> = ({currentGenre, moviesCards, onGenreClick}) => {
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
                    onGenreClick(movieGenre);
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

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
