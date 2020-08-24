import {createStore, compose, applyMiddleware} from "redux";
import {rootReducer} from "../reducers/index.js";
import {createAPI} from "../api.js";
import thunk from "redux-thunk";
import {Operation as DataOperation} from "../actions/dataActions.js";
import {Operation as UserOperation} from "../actions/userActions.js";
import {requireAuthorization} from "../actions/userActions.js";
import {AuthorizationStatus} from "../reducers/user/user.js";

const onUnauthorized = () => {
  store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(DataOperation.loadMovie());
store.dispatch(DataOperation.loadMovies());
store.dispatch(UserOperation.checkAuth());

