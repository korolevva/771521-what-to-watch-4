import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCardPreview from "./movie-card-preview.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const card = {
  src: `img/bohemian-rhapsody.jpg`,
  title: `Bohemian Rhapsody`,
};

it(`Simulate click on the title`, () => {
  const onCardTitleClick = jest.fn();
  const onCardHover = jest.fn();

  const cardPreview = shallow(
      <MovieCardPreview
        name={card.title}
        link={card.src}
        card={card}
        onCardTitleClick={onCardTitleClick}
        onCardHover={onCardHover}
      />
  );

  const cardPreviewTitle = cardPreview.find(`.small-movie-card__link`);
  cardPreviewTitle.simulate(`click`);

  cardPreview.simulate(`mouseenter`);

  expect(onCardTitleClick).toHaveBeenCalledTimes(1);
  expect(onCardHover).toHaveBeenCalledTimes(1);
});

