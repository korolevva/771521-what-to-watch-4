import {genreReducer} from "./genre.js";
import {ActionType} from "../../const.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(genreReducer(void 0, {})).toEqual({
    currentGenre: `All genres`,
  });
});

it(`Reducer should change current genre `, () => {
  expect(genreReducer({
    currentGenre: `All genres`,
  }, {
    type: ActionType.SET_GENRE,
    payload: `Drama`,
  })).toEqual({
    currentGenre: `Drama`,
  });
});


