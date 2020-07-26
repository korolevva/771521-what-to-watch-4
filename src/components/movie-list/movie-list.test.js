import React from "react";
import renderer from "react-test-renderer";
import MovieList from "./movie-list.jsx";
import {moviesCards} from "../../mocks/testMoviesCards.js";

it(`Render MovieList`, () => {
  const tree = renderer
    .create(<MovieList
      moviesCards={moviesCards}
      onCardTitleClick={() => {}}
      onCardClick={() => {}}
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
