import * as React from "react";
import renderer from "react-test-renderer";
import GenreList from "./genre-list.jsx";
import {moviesCards} from "../../mocks/testMoviesCards";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducers/name-space.js";

const mockStore = configureStore([]);

describe(`Should render GenreList correctly`, () => {
  const store = mockStore({
    [NameSpace.GENRE]: {
      currentGenre: `All genres`,
    },
    [NameSpace.DATA]: {moviesCards},
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
