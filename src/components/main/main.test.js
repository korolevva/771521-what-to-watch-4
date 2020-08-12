import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {moviesCards} from "../../mocks/testMoviesCards.js";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

export const promoMovie = {
  background: `img/bg-the-grand-budapest-hotel.jpg`,
  imagePreview: `img/bohemian-rhapsody.jpg`,
  poster: `https://placeimg.com/270/410/arch/grayscale`,
  title: `Bohemian Rhapsody`,
  genre: `Biography`,
  date: `2018`,
  description: `The story of the legendary British rock band Queen and lead singer Freddie Mercury`,
  rating: `8.0`,
  ratingCount: `305`,
  director: `Bryan Singer`,
  stars: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
  duration: `1h 39m`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

const mockStore = configureStore([]);
const store = mockStore({
  genre: {
    currentGenre: `All genres`,
    moviesByGenre: moviesCards,
    movies: moviesCards,
  },
  movieCard: {displayedMoviesCards: 8}
});

it(`Render Main`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <Main
        promoMovie={promoMovie}
        moviesCards={moviesCards}
        onCardTitleClick={() => {}}
        onCardClick={() => {}}
        onPlayButtonClick={() => {}}
      />
    </Provider>,
    {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
