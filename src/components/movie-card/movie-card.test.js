import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from "./movie-card.jsx";
import {moviesCards} from "../../mocks/testMoviesCards.js";
import {reviews} from "../../mocks/testReviews.js";
import {Router} from "react-router-dom";
import history from "../../history.js";
import user from "../../mocks/user.js";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducers/name-space.js";

const card = moviesCards[0];

const mockStore = configureStore([]);
const store = mockStore({
  [NameSpace.GENRE]: {
    currentGenre: `All genres`,
    moviesByGenre: moviesCards,
    movies: moviesCards,
  },
});

it(`Render MovieCard`, () => {
  const tree = renderer.create(<Provider store={store}>
    <Router
      history={history}
    >
      <MovieCard
        user={user}
        movieCardId={1}
        activeItem={`Overview`}
        movieCard={card}
        moviesCards={moviesCards}
        reviews={reviews}
        authorizationStatus={`NO_AUTH`}
        getMovieCardReviews={() => {}}
        onItemClick={() => {}}
      />
    </Router>
  </Provider>,
  {
    createNodeMock: () => {
      return {};
    }
  }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

