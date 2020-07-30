import React from "react";
import renderer from "react-test-renderer";
import SimilarMovies from "./similar-movies.jsx";
import {moviesCards} from "../../mocks/testMoviesCards.js";

it(`Render SimilarMovies`, () => {
  const tree = renderer
    .create(<SimilarMovies
      moviesCards={moviesCards}
      onCardClick={() => {}}
      onCardTitleClick={() => {}}
    />,
    {
      createNodeMock: () => {
        return {};
      }
    }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
