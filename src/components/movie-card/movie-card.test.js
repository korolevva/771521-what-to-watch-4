import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from "./movie-card.jsx";
import {moviesCards} from "../../mocks/testMoviesCards.js";
import {reviews} from "../../mocks/testReviews.js";

const card = moviesCards[0];

const state = {
  selectedMovie: card,
};


it(`Render MovieCard`, () => {
  const tree = renderer.create(
      <MovieCard
        card={state.selectedMovie}
        moviesCards={moviesCards}
        reviews={reviews}
        onCardTitleClick={() => {}}
        onCardClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

