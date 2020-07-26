import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {moviesCards} from "../../mocks/testMoviesCards.js";

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      genre={`Drama`}
      year={2014}
      moviesCards={moviesCards}
      onCardTitleClick={() => {}}
      onCardClick={() => {}}
    />,
    {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
