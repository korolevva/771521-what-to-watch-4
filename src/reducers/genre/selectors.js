import NameSpace from '../name-space';
import {createSelector} from 'reselect';
import {getMoviesCards} from '../data/selectors';
import {ALL_GENRES} from '../../const';

export const getCurrentGenre = (store) => store[NameSpace.GENRE].currentGenre;

export const getMoviesCardsByGenre = createSelector(
    getCurrentGenre,
    getMoviesCards,
    (currentGenre, movies) => {
      if (currentGenre === ALL_GENRES) {
        return movies;
      }
      return movies.filter((movie) => movie.genre === currentGenre);
    }
);
