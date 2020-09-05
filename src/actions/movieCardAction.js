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
