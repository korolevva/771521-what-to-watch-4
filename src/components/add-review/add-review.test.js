import React from 'react';
import renderer from 'react-test-renderer';
import AddReview from './add-review.jsx';
import moviesCards from "../../mocks/films.js";
import user from "../../mocks/user.js";
import {Router} from "react-router-dom";
import history from "../../history.js";


it(`Render AddReview`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <AddReview
          user={user}
          movieCard={moviesCards[0]}
          movieCardId={1}
          onReviewSubmit={() => {}}
          isDataSending={false}
          isErrorLoading={false}
        />
      </Router>,
      {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
