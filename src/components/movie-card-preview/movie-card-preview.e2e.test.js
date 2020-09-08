import * as React from "react";
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
  const onMouseEnter = jest.fn();
  const onMouseLeave = jest.fn();

  it(`should start/stop playing video on the card`, () => {

    const main = shallow(
        <MovieCardPreview
          key={card.id}
          card={card}
          moviesCards={moviesCards}
          isPlaying={false}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <video />
        </MovieCardPreview>
    );

    const movieCard = main.find(`.small-movie-card`).first();
    expect(movieCard).toHaveLength(1);

    movieCard.simulate(`mouseenter`);
    jest.advanceTimersByTime(2000);
    expect(onMouseEnter).toHaveBeenCalledTimes(1);

    movieCard.simulate(`mouseleave`);
    expect(onMouseLeave).toHaveBeenCalledTimes(1);
  });
});
