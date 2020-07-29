import {combineReducers} from "redux";
import {genreReducer} from "./genre.js";

export const rootReducer = combineReducers({
  genre: genreReducer,
});
