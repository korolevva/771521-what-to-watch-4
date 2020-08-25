import React from 'react';
import renderer from 'react-test-renderer';
import AddReview from './add-review.jsx';
import moviesCards from "../../mocks/films.js";


it(`Render AddReview`, () => {
  const tree = renderer.create(
      <AddReview
        movieCard={moviesCards[0]}
        onReviewSubmit={() => {}}
        isDataSending={false}
        isErrorLoading={false}
      />,
      {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
