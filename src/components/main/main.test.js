import * as React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {moviesCards} from "../../mocks/testMoviesCards.js";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducers/name-space.js";
import {Router} from "react-router-dom";
import history from "../../history.js";
import user from "../../mocks/user.js";

export const promoMovie = {
  background: `img/bg-the-grand-budapest-hotel.jpg`,
  imagePreview: `img/bohemian-rhapsody.jpg`,
  poster: `https://placeimg.com/270/410/arch/grayscale`,
  title: `Bohemian Rhapsody`,
  genre: `Biography`,
  date: 2018,
  description: `The story of the legendary British rock band Queen and lead singer Freddie Mercury`,
  rating: 8.0,
  ratingCount: 305,
  director: `Bryan Singer`,
  stars: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
  duration: 85,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

const mockStore = configureStore([]);
const store = mockStore({
  [NameSpace.GENRE]: {
    currentGenre: `All genres`,
    moviesByGenre: moviesCards,
    movies: moviesCards,
  },
  [NameSpace.MOVIE_CARD]: {displayedMoviesCards: 8},
  [NameSpace.DATA]: {
    movieCard: moviesCards[0],
    moviesCards,
  },
  [NameSpace.USER]: {user},
});

it(`Render Main`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <Router
        history={history}
      >
        <Main
          user={user}
          promoMovie={promoMovie}
          moviesCards={moviesCards}
          onPlayButtonClick={() => {}}
          authorizationStatus={`NO_AUTH`}
          moviesCardsByGenre={moviesCards}
          displayedMoviesCards={8}
        />
      </Router>
    </Provider>,
    {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
