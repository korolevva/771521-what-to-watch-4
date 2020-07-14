import React from "react";
import renderer from "react-test-renderer";
import MovieCardPreview from "./movie-card-preview.jsx";

const onCardTitleClick = (event) => {
  event.preventDefault();
};
const onCardClick = jest.fn();

const card = {
  id: 1,
  poster: `img/bohemian-rhapsody.jpg`,
  title: `Bohemian Rhapsody`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

it(`Render MovieCardPreview`, () => {
  const tree = renderer
    .create(<MovieCardPreview
      card={card}
      onCardTitleClick={onCardTitleClick}
      onCardClick={onCardClick}
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
