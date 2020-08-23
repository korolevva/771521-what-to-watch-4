import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {moviesCards} from "../../mocks/testMoviesCards.js";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducers/name-space.js";

const mockStore = configureStore([]);
const store = mockStore({
  [NameSpace.MOVIE_CARD]: {
    displayedMoviesCards: 8,
    selectedMovieCard: moviesCards[0],
    playingMovieCard: moviesCards[0],
  },
  [NameSpace.DATA]: {
    promoMovie: moviesCards[0],
    moviesCards,
  },
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
