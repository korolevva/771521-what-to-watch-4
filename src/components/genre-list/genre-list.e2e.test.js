import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenreList from "./genre-list.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {moviesCards} from "../../mocks/testMoviesCards.js";

Enzyme.configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);

describe(`GenreList`, () => {

  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      genre: {
        currentGenre: `All Genres`,
        movies: moviesCards,
      }
    });

    store.dispatch = jest.fn();

    component = mount(
        <Provider store={store}>
          <GenreList />
        </Provider>
    );
  });

  it(`The first genre is All genres`, () => {
    const firstGenre = component.find(`.catalog__genres-item`).at(0);
    expect(firstGenre.text()).toMatch(`All genres`);
  });

  it(`Сlicking on genre should dispatch an action`, () => {
    const genresLinks = component.find(`.catalog__genres-link`);
    genresLinks.at(1).simulate(`click`, {preventDefault: () => {}});
    expect(store.dispatch).toHaveBeenCalled();
  });
});
