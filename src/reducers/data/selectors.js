import NameSpace from '../name-space';

export const getMovieCard = (store) => store[NameSpace.DATA].movieCard;
export const getMoviesCards = (store) => store[NameSpace.DATA].moviesCards;
export const getReviews = (store) => store[NameSpace.DATA].reviews;
export const getIsDataSending = (store) => store[NameSpace.DATA].isDataSending;
export const getIsErrorLoading = (store) => store[NameSpace.DATA].isErrorLoading;
