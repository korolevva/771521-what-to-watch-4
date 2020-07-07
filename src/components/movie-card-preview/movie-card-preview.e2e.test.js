import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCardPreview from "./movie-card-preview.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const card = {
  id: 1,
  poster: `img/bohemian-rhapsody.jpg`,
  title: `Bohemian Rhapsody`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

describe(`MovieCardPreview`, () => {
  it(`Simulate click on the title`, () => {
    const onCardTitleClick = jest.fn();

    const cardPreview = shallow(
        <MovieCardPreview
          kye={card.id}
          card={card}
          onCardTitleClick={onCardTitleClick}
        />
    );

    const cardPreviewTitle = cardPreview.find(`.small-movie-card__link`);
    expect(cardPreviewTitle.exists).toBeTruthy();

    cardPreviewTitle.simulate(`click`);
    expect(onCardTitleClick).toHaveBeenCalledTimes(1);
  });

  // it(`should start/stop playing video on the card`, () => {
  //   const onPlay = jest.fn();
  //   const onPause = jest.fn();
  //   const onCardTitleClick = jest.fn();
  //   const main = shallow(
  //       <MovieCardPreview
  //         key={card.id}
  //         card={card}
  //         onPlay={onPlay}
  //         onPause={onPause}
  //         onCardTitleClick={onCardTitleClick}
  //       />
  //   );

  //   const movieCard = main.find(`.small-movie-card`).first();
  //   expect(movieCard).toHaveLength(1);
  //   movieCard.simulate(`mouseenter`);
  //   expect(onPlay).toHaveBeenCalledTimes(1);
  //   main.update();
  //   movieCard.simulate(`mouseleave`);
  //   expect(onPause).toHaveBeenCalledTimes(1);
  //   main.update();

  //   const movieCardImage = main.find(`.small-movie-card__image`);
  //   expect(movieCardImage).toHaveLength(1);
  // });
});
