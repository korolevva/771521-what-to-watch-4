import NameSpace from '../name-space';

export const getDisplayedMoviesCards = (store) => store[NameSpace.MOVIE_CARD].displayedMoviesCards;
export const getSelectedMovieCard = (store) => store[NameSpace.MOVIE_CARD].selectedMovieCard;
export const getPlayingMovieCard = (store) => store[NameSpace.MOVIE_CARD].playingMovieCard;
