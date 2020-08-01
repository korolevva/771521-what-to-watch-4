import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {moviesCards} from "../../mocks/testMoviesCards.js";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore([]);
const store = mockStore({
  genre: {
    currentGenre: `All genres`,
    moviesByGenre: moviesCards,
    movies: moviesCards,
  },
  movieCard: {displayedMoviesCards: 8}
});


it(`Render App`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <App />,
    </Provider>,
    {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
