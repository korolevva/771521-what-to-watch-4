import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCardPreview from "./movie-card-preview.jsx";
import {moviesCards} from "../../mocks/testMoviesCards.js";

Enzyme.configure({
  adapter: new Adapter(),
});

const card = {
  id: 1,
  poster: `img/bohemian-rhapsody.jpg`,
  title: `Bohemian Rhapsody`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

jest.useFakeTimers();


describe(`MovieCardPreview`, () => {
  const onCardTitleClick = jest.fn();
  const onCardClick = jest.fn();

  it(`Simulate click on a title`, () => {
    const cardPreview = shallow(
        <MovieCardPreview
          kye={card.id}
          card={card}
          moviesCards={moviesCards}
          onCardTitleClick={onCardTitleClick}
          onCardClick={onCardClick}
        />
    );

    const cardPreviewTitle = cardPreview.find(`.small-movie-card__link`);
    expect(cardPreviewTitle.exists).toBeTruthy();

    cardPreviewTitle.simulate(`click`);
    expect(onCardTitleClick).toHaveBeenCalledTimes(1);
  });

  it(`Simulate click on a card`, () => {
    const cardPreview = shallow(
        <MovieCardPreview
          kye={card.id}
          card={card}
          moviesCards={moviesCards}
          onCardTitleClick={onCardTitleClick}
          onCardClick={onCardClick}
        />
    );

    expect(cardPreview.exists).toBeTruthy();

    cardPreview.simulate(`click`);
    expect(onCardClick).toHaveBeenCalledTimes(1);
  });

  it(`should start/stop playing video on the card`, () => {
    const onMouseEnter = jest.fn();
    const main = shallow(
        <MovieCardPreview
          key={card.id}
          card={card}
          moviesCards={moviesCards}
          onMouseEnter={onMouseEnter}
          onCardTitleClick={onCardTitleClick}
          onCardClick={onCardClick}
        />
    );

    const movieCard = main.find(`.small-movie-card`).first();
    expect(movieCard).toHaveLength(1);

    movieCard.simulate(`mouseenter`);
    jest.advanceTimersByTime(2000);
    expect(main.state(`isPlaying`)).toEqual(true);

    movieCard.simulate(`mouseleave`);
    expect(main.state(`isPlaying`)).toEqual(false);
  });
});
