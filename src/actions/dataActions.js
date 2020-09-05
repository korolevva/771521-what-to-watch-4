import {ActionType} from "../const";
import {adapterMovie} from "../adapter/adapter";
import history from "../history.js";


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

export const loadFavoriteMovies = (movies) => {
  return {
    type: ActionType.LOAD_FAVORITE_MOVIES,
    payload: movies,
  };
};

export const Operation = {
  loadMovie: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(checkIsErrorLoading(false));
        dispatch(loadMovie(adapterMovie(response.data)));
      })
      .catch(() => {
        dispatch(checkIsErrorLoading(true));
      });
  },

  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(checkIsErrorLoading(false));
        const movies = response.data.map((movie) => adapterMovie(movie));
        dispatch(loadMovies(movies));
      })
      .catch(() => {
        dispatch(checkIsErrorLoading(true));
      });
  },

  loadReviews: (filmId) => (dispatch, getState, api) => {
    return api.get(`/comments/${filmId}`)
      .then((response) => {
        dispatch(checkIsErrorLoading(false));
        dispatch(loadReviews(response.data));
      })
      .catch(() => {
        dispatch(checkIsErrorLoading(true));
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
      history.goBack();
    })
    .catch(() => {
      dispatch(checkIsDataSending(false));
      dispatch(checkIsErrorLoading(true));
    });
  },

  loadFavoriteMovies: () => (dispatch, getState, api) => {

    return api.get(`/favorite`)
      .then((response) => {
        if (response.data) {
          const favoriteMovies = response.data.map((favoriteMovie) => adapterMovie(favoriteMovie));
          dispatch(loadFavoriteMovies(favoriteMovies));
        }
      })
      .catch((error) => {
        throw error;
      });
  },

  sendFavoriteMovie: (id, isFavorite) => (dispatch, getState, api) => {
    const status = isFavorite ? 0 : 1;

    return api.post(`/favorite/${id}/${status}`)
      .then(() => {
        dispatch(Operation.loadMovie());
        dispatch(Operation.loadMovies());
        dispatch(Operation.loadFavoriteMovies());
      })
      .catch((error) => {
        throw error;
      });
  },

};
