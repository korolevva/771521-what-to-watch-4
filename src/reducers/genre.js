import movies from "../mocks/films.js";
import {ActionType, ALL_GENRES} from "../const.js";

const initialState = {
  currentGenre: ALL_GENRES,
  moviesByGenre: movies,
  movies,
};

export const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE:
      return Object.assign({}, state, {
        currentGenre: action.payload,
      });

    case ActionType.SET_FILTRING_MOVIES_BY_GENRE:
      return Object.assign({}, state, {
        moviesByGenre: action.payload,
      });

    default:
      return state;
  }
};

