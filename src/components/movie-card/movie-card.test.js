import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from "./movie-card.jsx";
import {moviesCards} from "../../mocks/testMoviesCards.js";
import {reviews} from "../../mocks/testReviews.js";

const card = moviesCards[0];

it(`Render MovieCard`, () => {
  const tree = renderer.create(
      <MovieCard
        activeItem={`Overview`}
        card={card}
        moviesCards={moviesCards}
        reviews={reviews}
        onCardTitleClick={() => {}}
        onCardClick={() => {}}
        onPlayButtonClick={() => {}}
        onItemClick={() => {}}
      />,
      {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

