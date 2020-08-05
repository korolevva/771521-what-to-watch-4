import React from "react";
import renderer from "react-test-renderer";
import MovieCardPreview from "./movie-card-preview.jsx";
import {moviesCards} from "../../mocks/testMoviesCards.js";

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
      moviesCards={moviesCards}
      onCardTitleClick={onCardTitleClick}
      onCardClick={onCardClick}
      isPlaying={false}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
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
