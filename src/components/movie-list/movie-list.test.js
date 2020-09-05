import React from "react";
import renderer from "react-test-renderer";
import MovieList from "./movie-list.jsx";
import {moviesCards} from "../../mocks/testMoviesCards.js";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducers/name-space.js";
import {Router} from "react-router-dom";
import history from "../../history.js";

const mockStore = configureStore([]);
const store = mockStore({
  [NameSpace.GENRE]: {currentGenre: `All genre`},
  [NameSpace.DATA]: {moviesCards},
  [NameSpace.MOVIE_CARD]: {displayedMoviesCards: 8}
});

it(`Render MovieList`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <Router
        history={history}
      >
        <MovieList
          moviesCards={moviesCards}
          displayedMoviesCards={8}
        />
      </Router>
    </Provider>,
    {
      createNodeMock: () => {
        return {};
      }
    }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
