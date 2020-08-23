import {ActionType} from "../const";
import {adapterMovie} from "../adapter/adapter";


export const loadMovie = (movie) => {
  return {
    type: ActionType.LOAD_MOVIE,
    payload: movie,
  };
};


export const loadMovies = (movies) => {
  return {
    type: ActionType.LOAD_MOVIES,
    payload: movies,
  };
};

export const Operation = {
  loadMovie: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(loadMovie(adapterMovie(response.data)));
      });
  },
  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const movies = response.data.map((movie) => adapterMovie(movie));
        dispatch(loadMovies(movies));
      });
  }
};
