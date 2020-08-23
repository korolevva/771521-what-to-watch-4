import {createStore, compose, applyMiddleware} from "redux";
import {rootReducer} from "../reducers/index.js";
import {createAPI} from "../api.js";
import thunk from "redux-thunk";
import {Operation} from "../actions/dataActions.js";

const api = createAPI(() => { });

// export const store = createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
// );

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(Operation.loadMovie());
store.dispatch(Operation.loadMovies());

