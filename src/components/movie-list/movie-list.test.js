import React from "react";
import renderer from "react-test-renderer";
import MovieList from "./movie-list.jsx";
import {moviesCards} from "../../mocks/testMoviesCards.js";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore([]);
const store = mockStore({
  genre: {
    moviesByGenre: moviesCards,
  },
});

it(`Render MovieList`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <MovieList
        moviesCards={moviesCards}
        onCardTitleClick={() => {}}
        onCardClick={() => {}}
      />
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
