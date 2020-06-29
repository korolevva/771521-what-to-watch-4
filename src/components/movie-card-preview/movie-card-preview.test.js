import React from "react";
import renderer from "react-test-renderer";
import MovieCardPreview from "./movie-card-preview.jsx";

const onCardTitleClick = (event) => {
  event.preventDefault();
};

const card = {
  src: `img/bohemian-rhapsody.jpg`,
  title: `Bohemian Rhapsody`,
};

it(`Render MovieCardPreview`, () => {
  const tree = renderer
    .create(<MovieCardPreview
      name={card.src}
      link={card.title}
      card={card}
      onCardTitleClick={onCardTitleClick}
      onCardHover={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
