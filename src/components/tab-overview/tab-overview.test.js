import React from "react";
import renderer from "react-test-renderer";
import TabOverview from "./tab-overview.jsx";
import {moviesCards} from "../../mocks/testMoviesCards.js";

const card = moviesCards[0];

it(`Render TabOverview`, () => {
  const tree = renderer
    .create(<TabOverview
      card={card}
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
