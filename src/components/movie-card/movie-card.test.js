import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from "./movie-card.jsx";
import {moviesCards} from "../../mocks/testMoviesCards.js";
import {reviews} from "../../mocks/testReviews.js";
import {Router} from "react-router-dom";
import history from "../../history.js";

const card = moviesCards[0];

it(`Render MovieCard`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <MovieCard
          activeItem={`Overview`}
          card={card}
          moviesCards={moviesCards}
          reviews={reviews}
          onCardTitleClick={() => {}}
          onCardClick={() => {}}
          onPlayButtonClick={() => {}}
          onItemClick={() => {}}
          onSignInClick={() => {}}
          authorizationStatus={`NO_AUTH`}
        />
      </Router>,
      {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

