import {ActionType, DISPLAYED_MOVIES_CARDS} from "../const";


export const increaseDisplayedMoviesCount = () => {
  return {
    type: ActionType.INCREASE_DISPLAYED_MOVIES_COUNT,
    payload: DISPLAYED_MOVIES_CARDS,
  };
};

export const resetDisplayedMoviesCount = () => {
  return {
    type: ActionType.RESET_DISPLAYED_MOVIES_COUNT,
    payload: DISPLAYED_MOVIES_CARDS,
  };
};

export const chooseMovie = (movieCard) => {
  return {
    type: ActionType.CHOOSE_MOVIE,
    payload: movieCard,
  };
};

export const playMovie = (movieCard) => {
  return {
    type: ActionType.PLAY_MOVIE,
    payload: movieCard,
  };
};

export const closeMovie = () => {
  return {
    type: ActionType.PLAY_MOVIE,
    payload: null,
  };
};
