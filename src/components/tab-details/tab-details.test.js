import * as React from "react";
import renderer from "react-test-renderer";
import TabDetails from "./tab-details.jsx";
import {moviesCards} from "../../mocks/testMoviesCards.js";

const card = moviesCards[0];

it(`Render TabDetails`, () => {
  const tree = renderer
    .create(<TabDetails
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
