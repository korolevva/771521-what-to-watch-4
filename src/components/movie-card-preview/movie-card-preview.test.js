import React from "react";
import renderer from "react-test-renderer";
import MovieCardPreview from "./movie-card-preview.jsx";

const onMovieCardTitleClick = (event) => {
  event.preventDefault();
};

it(`Render MovieCardPreview`, () => {
  const tree = renderer
    .create(<MovieCardPreview
      name={`Aviator`}
      onMovieCardTitleClick={onMovieCardTitleClick}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
