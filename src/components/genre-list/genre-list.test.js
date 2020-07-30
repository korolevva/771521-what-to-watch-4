import React from "react";
import renderer from "react-test-renderer";
import GenreList from "./genre-list.jsx";
import {moviesCards} from "../../mocks/testMoviesCards";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

describe(`Should render GenreList correctly`, () => {
  const store = mockStore({
    genre: {
      currentGenre: `All genres`,
      movies: moviesCards,
    },

  });

  it(`Render GenreList`, () => {
    const tree = renderer
      .create(<Provider store={store}>
        <GenreList/>
      </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
