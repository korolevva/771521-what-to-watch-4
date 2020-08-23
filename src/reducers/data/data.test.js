import MockAdapter from "axios-mock-adapter";
import movies from "../../mocks/films.js";
import {promoMovie} from "../../mocks/promoMovie.js";
import {dataReducer} from "./data.js";
import {ActionType} from "../../const.js";
import {createAPI} from "../../api.js";
import {Operation} from "../../actions/dataActions.js";
import {adapterMovie} from "../../adapter/adapter.js";

const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(dataReducer(void 0, {})).toEqual({
    movieCard: {},
    moviesCards: [],
  });
});

it(`Reducer should update movieCard`, () => {
  expect(dataReducer({
    movieCard: {},
  }, {
    type: ActionType.LOAD_MOVIE,
    payload: promoMovie,
  })).toEqual({
    movieCard: promoMovie,
  });
});

it(`Reducer should update moviesCards`, () => {
  expect(dataReducer({
    moviesCards: [],
  }, {
    type: ActionType.LOAD_MOVIES,
    payload: movies,
  })).toEqual({
    moviesCards: movies,
  });
});

describe(`Data loading work correctly`, () => {
  it(`Should load /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const movieLoader = Operation.loadMovie();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, [{fake: true}]);

    return movieLoader(dispatch, () => {}, api)
          .then(() => {
            expect(dispatch).toHaveBeenCalledTimes(1);
            expect(dispatch).toHaveBeenCalledWith({
              type: ActionType.LOAD_MOVIE,
              payload: adapterMovie({fake: true}),
            });
          });
  });

  it(`Should load /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const moviesLoader = Operation.loadMovies();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

    return moviesLoader(dispatch, () => {}, api)
          .then(() => {
            expect(dispatch).toHaveBeenCalledTimes(1);
            expect(dispatch).toHaveBeenCalledWith({
              type: ActionType.LOAD_MOVIES,
              payload: [adapterMovie({fake: true})],
            });
          });
  });
});
