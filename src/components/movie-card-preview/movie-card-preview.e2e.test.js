import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCardPreview from "./movie-card-preview.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Simulate click on the title`, () => {
  const onMovieCardTitleClick = jest.fn();

  const movieCardPreview = shallow(
      <MovieCardPreview
        name={`Aviator`}
        onMovieCardTitleClick={onMovieCardTitleClick}
      />
  );

  const movieCardPreviewTitle = movieCardPreview.find(`.small-movie-card__link`);
  movieCardPreviewTitle.simulate(`click`);

  expect(onMovieCardTitleClick).toHaveBeenCalledTimes(1);
});

