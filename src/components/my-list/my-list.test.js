import * as React from "react";
import renderer from "react-test-renderer";
import MyList from "./my-list.jsx";
import {Router} from "react-router-dom";
import history from "../../history.js";
import configureStore from "redux-mock-store";
import {moviesCards} from "../../mocks/testMoviesCards.js";
import NameSpace from "../../reducers/name-space.js";
import {Provider} from "react-redux";
import user from "../../mocks/user.js";

const mockStore = configureStore([]);
const store = mockStore({
  [NameSpace.DATA]: {
    favoriteMovieCards: moviesCards
  },
});

it(`MyList component render correctly`, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <Router
          history={history}
        >
          <MyList
            user={user}
            displayedMoviesCards={8}
          />
        </Router>
      </Provider>,
      {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
