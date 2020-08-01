import {combineReducers} from "redux";
import {genreReducer} from "./genre.js";
import {movieCardReducer} from "./movieCard.js";

export const rootReducer = combineReducers({
  genre: genreReducer,
  movieCard: movieCardReducer,
});
