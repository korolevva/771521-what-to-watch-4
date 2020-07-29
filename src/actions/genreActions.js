import {ActionType} from "../const";


export const setCurrentGenre = (genre) => {
  return {
    type: ActionType.SET_GENRE,
    payload: genre,
  };
};


export const setFiltredByGenre = (moviesByGenre) => {
  return {
    type: ActionType.SET_FILTRING_MOVIES_BY_GENRE,
    payload: moviesByGenre,
  };
};

