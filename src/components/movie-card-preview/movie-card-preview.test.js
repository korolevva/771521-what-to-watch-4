import React from "react";
import renderer from "react-test-renderer";
import MovieCardPreview from "./movie-card-preview.jsx";
import {moviesCards} from "../../mocks/testMoviesCards.js";
import {Router} from "react-router-dom";
import history from "../../history.js";

const card = moviesCards[0];

it(`Render MovieCardPreview`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <MovieCardPreview
            key={`${card.id}`}
            card={card}
            moviesCards={moviesCards}
            onCardTitleClick={() => {}}
            onCardClick={() => {}}
            onMouseEnter={() => {}}
            onMouseLeave={() => {}}
            resetTimeStamp={true}
            muted={true}
            width="280"
            height="175"
            isPlaying={false}
            controls={false}
            poster={card.imagePreview}
            autoPlay={false}
          >
            <video />
          </MovieCardPreview>
        </Router>,
        {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
