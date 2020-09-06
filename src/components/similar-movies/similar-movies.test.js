import * as React from "react";
import renderer from "react-test-renderer";
import SimilarMovies from "./similar-movies.jsx";
import {moviesCards} from "../../mocks/testMoviesCards.js";
import {Router} from "react-router-dom";
import history from "../../history.js";

it(`Render SimilarMovies`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <SimilarMovies
            moviesCards={moviesCards}
          />
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
