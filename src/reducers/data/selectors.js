import NameSpace from '../name-space';

export const getMovieCard = (store) => store[NameSpace.DATA].movieCard;
export const getMoviesCards = (store) => store[NameSpace.DATA].moviesCards;
