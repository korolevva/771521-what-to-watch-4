import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from "./movie-card.jsx";
import {moviesCards} from "../../mocks/testMoviesCards.js";
import {reviews} from "../../mocks/testReviews.js";
import {Tab} from "./movie-card.jsx";

const card = moviesCards[0];

const state = {
  selectedMovie: card,
};

it(`Render MovieCard`, () => {
  const tree = renderer.create(
      <MovieCard
        activeItem={Tab.OVERVIEW}
        card={state.selectedMovie}
        moviesCards={moviesCards}
        reviews={reviews}
        onCardTitleClick={() => {}}
        onCardClick={() => {}}
        onItemClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

