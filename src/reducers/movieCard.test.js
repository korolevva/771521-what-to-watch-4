import {movieCardReducer} from "./movieCard";
import {ActionType} from "../const.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(movieCardReducer(void 0, {})).toEqual({
    displayedMoviesCards: 8,
    selectedMovieCard: null,
    playingMovieCard: null,
  });
});

it(`Reducer should change displayed films count`, () => {
  expect(movieCardReducer({
    displayedMoviesCards: 8,
    selectedMovieCard: null,
    playingMovieCard: null,
  }, {
    type: ActionType.INCREASE_DISPLAYED_MOVIES_COUNT,
    payload: 8,
  })).toEqual({
    displayedMoviesCards: 16,
    selectedMovieCard: null,
    playingMovieCard: null,
  });
});

it(`Reducer should change value selectedMovieCard`, () => {
  expect(movieCardReducer({
    displayedMoviesCards: 8,
    selectedMovieCard: null,
    playingMovieCard: null,
  }, {
    type: ActionType.CHOOSE_MOVIE,
    payload: {
      id: 1,
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
    },
  })).toEqual({
    displayedMoviesCards: 8,
    selectedMovieCard: {
      id: 1,
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
    },
    playingMovieCard: null,
  });
});

it(`Reducer should change value playingMovieCard`, () => {
  expect(movieCardReducer({
    displayedMoviesCards: 8,
    selectedMovieCard: null,
    playingMovieCard: null,
  }, {
    type: ActionType.PLAY_MOVIE,
    payload: {
      id: 1,
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
    },
  })).toEqual({
    displayedMoviesCards: 8,
    selectedMovieCard: null,
    playingMovieCard: {
      id: 1,
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
    },
  });
});

it(`Reducer should delete value playingMovieCard`, () => {
  expect(movieCardReducer({
    displayedMoviesCards: 8,
    selectedMovieCard: null,
    playingMovieCard: {
      id: 1,
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
    },
  }, {
    type: ActionType.CLOSE_MOVIE,
    payload: null,
  })).toEqual({
    displayedMoviesCards: 8,
    selectedMovieCard: null,
    playingMovieCard: null,
  });
});
