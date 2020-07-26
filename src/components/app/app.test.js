import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {moviesCards} from "../../mocks/testMoviesCards.js";
import {reviews} from "../../mocks/testReviews.js";

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      genre={`Drama`}
      year={2014}
      moviesCards={moviesCards}
      reviews={reviews}
    />,
    {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
