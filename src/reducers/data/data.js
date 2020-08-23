import {ActionType} from "../../const.js";

const initialState = {
  movieCard: {},
  moviesCards: [],
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIE:
      return Object.assign({}, state, {
        movieCard: action.payload,
      });
    case ActionType.LOAD_MOVIES:
      return Object.assign({}, state, {
        moviesCards: action.payload,
      });
    default:
      return state;
  }
};
