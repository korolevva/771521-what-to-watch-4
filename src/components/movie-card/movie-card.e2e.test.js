import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";
import {moviesCards} from "../../mocks/testMoviesCards.js";
import {reviews} from "../../mocks/testReviews.js";

Enzyme.configure({
  adapter: new Adapter(),
});

const card = moviesCards[0];

const state = {
  selectedMovie: card,
};


describe(`MovieCard`, () => {
  const onCardTitleClick = jest.fn();
  const onCardClick = jest.fn();
  it(`if you click on the tab Overview, activeTab will be Overview`, () => {
    const movieCard = mount(
        <MovieCard
          card={state.selectedMovie}
          moviesCards={moviesCards}
          reviews={reviews}
          onCardTitleClick={onCardTitleClick}
          onCardClick={onCardClick}
        />
    );

    movieCard.setState({activeTab: `Details`});

    const tabOverview = movieCard.find(`.movie-nav__item`).at(0);
    const tabOverviewLink = tabOverview.find(`.movie-nav__link`);

    tabOverviewLink.simulate(`click`, {preventDefault: () => {}});
    expect(movieCard.state()).toEqual({activeTab: `Overview`});
  });

  it(`if you click on the tab Details, activeTab will be Details`, () => {
    const movieCard = mount(
        <MovieCard
          card={state.selectedMovie}
          moviesCards={moviesCards}
          reviews={reviews}
          onCardTitleClick={onCardTitleClick}
          onCardClick={onCardClick}
        />
    );

    const tabDetails = movieCard.find(`.movie-nav__item`).at(1);
    const tabDetailsLink = tabDetails.find(`.movie-nav__link`);

    tabDetailsLink.simulate(`click`, {preventDefault: () => {}});
    expect(movieCard.state()).toEqual({activeTab: `Details`});
  });

  it(`if you click on the tab Reviews, activeTab will be Reviews`, () => {
    const movieCard = mount(
        <MovieCard
          card={state.selectedMovie}
          moviesCards={moviesCards}
          reviews={reviews}
          onCardTitleClick={onCardTitleClick}
          onCardClick={onCardClick}
        />
    );

    const tabReviews = movieCard.find(`.movie-nav__item`).at(2);
    const tabReviewsLink = tabReviews.find(`.movie-nav__link`);

    tabReviewsLink.simulate(`click`, {preventDefault: () => {}});
    expect(movieCard.state()).toEqual({activeTab: `Reviews`});
  });
});
