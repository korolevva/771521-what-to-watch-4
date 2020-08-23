import {ActionType, DISPLAYED_MOVIES_CARDS} from "../../const.js";

const initialState = {
  displayedMoviesCards: DISPLAYED_MOVIES_CARDS,
  selectedMovieCard: null,
  playingMovieCard: null,
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

    case ActionType.CHOOSE_MOVIE:
      return Object.assign({}, state, {
        selectedMovieCard: action.payload,
      });

    case ActionType.PLAY_MOVIE:
      return Object.assign({}, state, {
        playingMovieCard: action.payload,
      });

    case ActionType.CLOSE_MOVIE:
      return Object.assign({}, state, {
        playingMovieCard: action.payload,
      });

    default:
      return state;
  }
};

