import {ActionType, DISPLAYED_MOVIES_CARDS} from "../const.js";

const initialState = {
  displayedMoviesCards: DISPLAYED_MOVIES_CARDS,
};

export const movieCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREASE_DISPLAYED_MOVIES_COUNT:
      return Object.assign({}, state, {
        displayedMoviesCards: state.displayedMoviesCards + action.payload,
      });

    case ActionType.RESET_DISPLAYED_MOVIES_COUNT:
      return Object.assign({}, state, {
        displayedMoviesCards: DISPLAYED_MOVIES_CARDS,
      });

    default:
      return state;
  }
};

