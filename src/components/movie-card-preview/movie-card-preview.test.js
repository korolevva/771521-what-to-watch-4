import React from "react";
import renderer from "react-test-renderer";
import MovieCardPreview from "./movie-card-preview.jsx";

it(`Render MovieCardPreview`, () => {
  const tree = renderer
    .create(<MovieCardPreview
      name={`Aviator`}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
