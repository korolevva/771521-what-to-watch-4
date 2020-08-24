import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {moviesCards} from "../../mocks/testMoviesCards.js";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducers/name-space.js";

const mockStore = configureStore([]);

const promoMovie = {
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
  duration: 95,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};


describe(`Render App`, () => {
  it(`Render SignIn`, () => {
    const store = mockStore({
      [NameSpace.MOVIE_CARD]: {
        displayedMoviesCards: 8,
        selectedMovieCard: null,
        playingMovieCard: null,
      },
      [NameSpace.DATA]: {
        promoMovie,
        moviesCards,
      },
      [NameSpace.USER]: {
        authorizationStatus: `NO_AUTH`,
        isSingInSelected: true,
        isErrorAuth: false,
      }
    });

    const tree = renderer
      .create(<Provider store={store}>
        <App
        />,
      </Provider>,
      {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render FullScreenMovie`, () => {
    const store = mockStore({
      [NameSpace.MOVIE_CARD]: {
        displayedMoviesCards: 8,
        selectedMovieCard: null,
        playingMovieCard: moviesCards[0],
      },
      [NameSpace.DATA]: {
        promoMovie,
        moviesCards,
      },
      [NameSpace.USER]: {
        authorizationStatus: `NO_AUTH`,
        isSingInSelected: false,
        isErrorAuth: false,
      }
    });

    const tree = renderer
      .create(<Provider store={store}>
        <App
        />,
      </Provider>,
      {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render MovieCard`, () => {
    const store = mockStore({
      [NameSpace.MOVIE_CARD]: {
        displayedMoviesCards: 8,
        selectedMovieCard: moviesCards[0],
        playingMovieCard: null,
      },
      [NameSpace.DATA]: {
        promoMovie,
        moviesCards,
      },
      [NameSpace.USER]: {
        authorizationStatus: `NO_AUTH`,
        isSingInSelected: false,
        isErrorAuth: false,
      }
    });

    const tree = renderer
      .create(<Provider store={store}>
        <App
        />,
      </Provider>,
      {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


