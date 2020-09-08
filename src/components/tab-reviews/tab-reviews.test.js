import * as React from "react";
import renderer from "react-test-renderer";
import TabReviews from "./tab-reviews.jsx";
import reviews from "../../mocks/reviews.js";

it(`Render TabReviews`, () => {
  const tree = renderer
    .create(<TabReviews
      reviews={reviews}
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
