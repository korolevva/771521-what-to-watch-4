import {combineReducers} from "redux";
import {genreReducer} from "./genre/genre.js";
import {movieCardReducer} from "./movie-card/movie-card.js";
import {dataReducer} from "./data/data.js";
import NameSpace from "./name-space.js";

export const rootReducer = combineReducers({
  [NameSpace.GENRE]: genreReducer,
  [NameSpace.MOVIE_CARD]: movieCardReducer,
  [NameSpace.DATA]: dataReducer,
});
