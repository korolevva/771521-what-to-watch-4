import {genreReducer} from "./genre.js";
import movies from "../mocks/films.js";
import {ActionType} from "../const.js";

const filteredMovies = [
  {
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
];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(genreReducer(void 0, {})).toEqual({
    currentGenre: `All genres`,
    moviesByGenre: movies,
    movies,
  });
});

it(`Reducer should change current genre `, () => {
  expect(genreReducer({
    currentGenre: `All genres`,
    moviesByGenre: movies,
    movies,
  }, {
    type: ActionType.SET_GENRE,
    payload: `Drama`,
  })).toEqual({
    currentGenre: `Drama`,
    moviesByGenre: movies,
    movies,
  });
});

it(`Reducer should change the array movieByGenre`, () => {
  expect(genreReducer({
    currentGenre: `All genres`,
    moviesByGenre: movies,
    movies,
  }, {
    type: ActionType.SET_FILTRING_MOVIES_BY_GENRE,
    payload: filteredMovies,
  })).toEqual({
    currentGenre: `All genres`,
    moviesByGenre: [
      {
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
    ],
    movies,
  });
});

