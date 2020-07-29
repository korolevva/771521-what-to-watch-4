import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {setCurrentGenre, setFiltredByGenre} from "../../actions/genreActions";
import {ALL_GENRES} from "../../const";

const generateGenreList = (movies) => {
  const genres = new Set(movies.map((movie) => movie.genre));
  return [ALL_GENRES, ...genres];
};

const filterByGenre = (currentGenre, movies) => {
  if (currentGenre === ALL_GENRES) {
    return movies;
  }
  return movies.filter((movie) => movie.genre === currentGenre);
};

const GenreList = ({currentGenre, movies, onGenreClick}) => {

  const genres = generateGenreList(movies);
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
                    onGenreClick(movieGenre, movies);
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
  currentGenre: store.genre.currentGenre,
  movies: store.genre.movies,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre, movies) {
    dispatch(setCurrentGenre(genre));
    const filteredMovies = filterByGenre(genre, movies);
    dispatch(setFiltredByGenre(filteredMovies));
  },
});

GenreList.propTypes = {
  currentGenre: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
  onGenreClick: PropTypes.func.isRequired,
};

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
