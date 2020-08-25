import {ActionType} from "../const";
import {adapterMovie} from "../adapter/adapter";


export const loadMovie = (movie) => {
  return {
    type: ActionType.LOAD_MOVIE,
    payload: movie,
  };
};


export const loadMovies = (movies) => {
  return {
    type: ActionType.LOAD_MOVIES,
    payload: movies,
  };
};

export const loadReviews = (reviews) => {
  return {
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  };
};

export const checkIsDataSending = (status) => {
  return {
    type: ActionType.CHECK_IS_DATA_SENDING,
    payload: status,
  };
};

export const checkIsErrorLoading = (status) => {
  return {
    type: ActionType.CHECK_IS_ERROR_LOADING,
    payload: status,
  };
};

export const Operation = {
  loadMovie: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(loadMovie(adapterMovie(response.data)));
      });
  },

  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const movies = response.data.map((movie) => adapterMovie(movie));
        dispatch(loadMovies(movies));
      });
  },

  loadReviews: (filmId) => (dispatch, getState, api) => {
    return api.get(`/comments/${filmId}`)
      .then((response) => {
        dispatch(loadReviews(response.data));
      });
  },

  sendReview: (movieId, review) => (dispatch, getState, api) => {
    dispatch(checkIsDataSending(true));
    return api.post(`/comments/${movieId}`, {
      rating: review.rating,
      comment: review.comment,
    })
    .then(() => {
      dispatch(checkIsDataSending(false));
      dispatch(Operation.loadReviews(movieId));
      dispatch(checkIsErrorLoading(false));
      // history.goBack();
    })
    .catch(() => {
      dispatch(checkIsDataSending(false));
      dispatch(checkIsErrorLoading(true));
    });
  },

};
