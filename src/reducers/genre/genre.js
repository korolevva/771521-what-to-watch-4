import {ActionType, ALL_GENRES} from "../../const.js";

const initialState = {
  currentGenre: ALL_GENRES,
};

export const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE:
      return Object.assign({}, state, {
        currentGenre: action.payload,
      });

    default:
      return state;
  }
};

