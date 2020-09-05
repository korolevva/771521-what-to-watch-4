import {movieCardReducer} from "./movie-card";
import {ActionType} from "../../const.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(movieCardReducer(void 0, {})).toEqual({
    displayedMoviesCards: 8,
  });
});

it(`Reducer should change displayed films count`, () => {
  expect(movieCardReducer({
    displayedMoviesCards: 8,
  }, {
    type: ActionType.INCREASE_DISPLAYED_MOVIES_COUNT,
    payload: 8,
  })).toEqual({
    displayedMoviesCards: 16,
  });
});
