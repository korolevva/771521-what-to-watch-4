import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieList from "./movie-list.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducers/name-space.js";
import {Router} from "react-router-dom";
import history from "../../history.js";

const renderIgnoringUnstableFlushDiscreteUpdates = (component) => {
  /* eslint-disable no-console */
  const originalError = console.error;
  const error = jest.fn();
  console.error = error;
  const result = mount(component);
  console.error = originalError;
  /* eslint-enable no-console */
  return result;
};

Enzyme.configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);

describe(`MovieList`, () => {


  it(`After rendering 9 cards, button Show more is displayed`, () => {

    const moviesCards = [
      {
        id: 1,
        background: `img/bg-the-grand-budapest-hotel.jpg`,
        imagePreview: `img/bohemian-rhapsody.jpg`,
        poster: `https://placeimg.com/270/410/arch/grayscale`,
        title: `Bohemian Rhapsody`,
        genre: `Biography`,
        date: `2018`,
        description: `The story of the legendary British rock band Queen and lead singer Freddie Mercury`,
        rating: `8.0`,
        ratingCount: `305`,
        director: `Bryan Singer`,
        stars: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
        duration: `1h 39m`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      },
      {
        id: 2,
        background: `https://placeimg.com/1300/552/tech`,
        imagePreview: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
        poster: `https://placeimg.com/270/410/arch/grayscale`,
        title: `Fantastic Beasts: The Crimes of Grindelwald`,
        genre: `Drama`,
        date: `2018`,
        description: `The second installment of the "Fantastic Beasts" series featuring the adventures of Magizoologist Newt Scamander.`,
        rating: `6.6`,
        ratingCount: `423`,
        director: `David Yates`,
        stars: [`Eddie Redmayne`, `Katherine Waterston`, `Dan Fogler`],
        duration: `1h 39m`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      },
      {
        id: 3,
        background: `https://placeimg.com/1300/552/tech`,
        imagePreview: `img/macbeth.jpg`,
        poster: `https://placeimg.com/270/410/arch/grayscale`,
        title: `Macbeth`,
        genre: `Music`,
        date: `2015`,
        description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
        rating: `6.6`,
        ratingCount: `201`,
        director: `Justin Kurzel`,
        stars: [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`],
        duration: `1h 39m`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      },
      {
        id: 4,
        background: `https://placeimg.com/1300/552/tech`,
        imagePreview: `img/aviator.jpg`,
        poster: `https://placeimg.com/270/410/arch/grayscale`,
        title: `Aviator`,
        genre: `Drama`,
        date: `2004`,
        description: `A biopic depicting the early years of legendary Director and aviator Howard Hughes' career from the late 1920s to the mid 1940s.`,
        rating: `7.5`,
        ratingCount: `595`,
        director: `Martin Scorsese`,
        stars: [`Leonardo DiCaprio`, `Cate Blanchett`, `Kate Beckinsale`],
        duration: `1h 39m`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      },
      {
        id: 5,
        background: `https://placeimg.com/1300/552/tech`,
        imagePreview: `img/we-need-to-talk-about-kevin.jpg`,
        poster: `https://placeimg.com/270/410/arch/grayscale`,
        title: `We need to talk about Kevin`,
        genre: `Drama`,
        date: `2011`,
        description: `Kevin's mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.`,
        rating: `7.5`,
        ratingCount: `700`,
        director: `Lynne Ramsay`,
        stars: [`Tilda Swinton`, `John C. Reilly`, `Ezra Miller`],
        duration: `1h 39m`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      },
      {
        id: 6,
        background: `https://placeimg.com/1300/552/tech`,
        imagePreview: `img/what-we-do-in-the-shadows.jpg`,
        poster: `https://placeimg.com/270/410/arch/grayscale`,
        title: `What We Do in the Shadows`,
        genre: `Drama`,
        date: `2019`,
        description: `A look into the daily (or rather, nightly) lives of three vampires, who've lived together for over 100 years, on Staten Island.`,
        rating: `8.5`,
        ratingCount: `850`,
        director: `Jemaine Clement`,
        stars: [`Kayvan Novak`, `Matt Berry`, `Natasia Demetriou`],
        duration: `1h 39m`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      },
      {
        id: 7,
        background: `https://placeimg.com/1300/552/tech`,
        imagePreview: `img/revenant.jpg`,
        poster: `https://placeimg.com/270/410/arch/grayscale`,
        title: `Revenant`,
        genre: `Biography`,
        date: `2015`,
        description: `A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.`,
        rating: `8.0`,
        ratingCount: `730`,
        director: `Alejandro G.`,
        stars: [`Leonardo DiCaprio`, `Tom Hardy`, `Will Poulter`],
        duration: `1h 39m`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      },
      {
        id: 8,
        background: `https://placeimg.com/1300/552/tech`,
        imagePreview: `img/johnny-english.jpg`,
        poster: `https://placeimg.com/270/410/arch/grayscale`,
        title: `Johnny English`,
        genre: `Biography`,
        date: `2018`,
        description: `After a cyber-attack reveals the identity of all of the active undercover agents in Britain, Johnny English (Rowan Atkinson) is forced to come out of retirement to find the mastermind hacker.`,
        rating: `6.2`,
        ratingCount: `370`,
        director: `David Kerr`,
        stars: [`Rowan Atkinson`, `Ben Miller`, `Olga Kurylenko`],
        duration: `1h 39m`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      },
      {
        id: 9,
        background: `img/bg-the-grand-budapest-hotel.jpg`,
        imagePreview: `img/bohemian-rhapsody.jpg`,
        poster: `https://placeimg.com/270/410/arch/grayscale`,
        title: `Bohemian Rhapsody`,
        genre: `Biography`,
        date: `2018`,
        description: `The story of the legendary British rock band Queen and lead singer Freddie Mercury`,
        rating: `8.0`,
        ratingCount: `305`,
        director: `Bryan Singer`,
        stars: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
        duration: `1h 39m`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      },
    ];

    const store = mockStore({
      [NameSpace.MOVIE_CARD]: {
        displayedMoviesCards: 8,
      },
      [NameSpace.GENRE]: {
        currentGenre: `All genres`,
      },
      [NameSpace.DATA]: {
        moviesCards,
      },
    });

    const component = renderIgnoringUnstableFlushDiscreteUpdates(
        <Provider store={store}>
          <Router
            history={history}
          >
            <MovieList
              moviesCards={moviesCards}
              displayedMoviesCards={8}
              onShowMoreButtonClick={() => {}}
            />
          </Router>
        </Provider>
    );

    expect(component.find(`.catalog__button`).length).toBe(1);
  });

  it(`After rendering 7 cards, button 'Show more' isn't displayed`, () => {

    const moviesCards = [
      {
        id: 1,
        background: `img/bg-the-grand-budapest-hotel.jpg`,
        imagePreview: `img/bohemian-rhapsody.jpg`,
        poster: `https://placeimg.com/270/410/arch/grayscale`,
        title: `Bohemian Rhapsody`,
        genre: `Biography`,
        date: `2018`,
        description: `The story of the legendary British rock band Queen and lead singer Freddie Mercury`,
        rating: `8.0`,
        ratingCount: `305`,
        director: `Bryan Singer`,
        stars: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
        duration: `1h 39m`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      },
      {
        id: 2,
        background: `https://placeimg.com/1300/552/tech`,
        imagePreview: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
        poster: `https://placeimg.com/270/410/arch/grayscale`,
        title: `Fantastic Beasts: The Crimes of Grindelwald`,
        genre: `Drama`,
        date: `2018`,
        description: `The second installment of the "Fantastic Beasts" series featuring the adventures of Magizoologist Newt Scamander.`,
        rating: `6.6`,
        ratingCount: `423`,
        director: `David Yates`,
        stars: [`Eddie Redmayne`, `Katherine Waterston`, `Dan Fogler`],
        duration: `1h 39m`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      },
      {
        id: 3,
        background: `https://placeimg.com/1300/552/tech`,
        imagePreview: `img/macbeth.jpg`,
        poster: `https://placeimg.com/270/410/arch/grayscale`,
        title: `Macbeth`,
        genre: `Music`,
        date: `2015`,
        description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
        rating: `6.6`,
        ratingCount: `201`,
        director: `Justin Kurzel`,
        stars: [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`],
        duration: `1h 39m`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      },
      {
        id: 4,
        background: `https://placeimg.com/1300/552/tech`,
        imagePreview: `img/aviator.jpg`,
        poster: `https://placeimg.com/270/410/arch/grayscale`,
        title: `Aviator`,
        genre: `Drama`,
        date: `2004`,
        description: `A biopic depicting the early years of legendary Director and aviator Howard Hughes' career from the late 1920s to the mid 1940s.`,
        rating: `7.5`,
        ratingCount: `595`,
        director: `Martin Scorsese`,
        stars: [`Leonardo DiCaprio`, `Cate Blanchett`, `Kate Beckinsale`],
        duration: `1h 39m`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      },
      {
        id: 5,
        background: `https://placeimg.com/1300/552/tech`,
        imagePreview: `img/we-need-to-talk-about-kevin.jpg`,
        poster: `https://placeimg.com/270/410/arch/grayscale`,
        title: `We need to talk about Kevin`,
        genre: `Drama`,
        date: `2011`,
        description: `Kevin's mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.`,
        rating: `7.5`,
        ratingCount: `700`,
        director: `Lynne Ramsay`,
        stars: [`Tilda Swinton`, `John C. Reilly`, `Ezra Miller`],
        duration: `1h 39m`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      },
      {
        id: 6,
        background: `https://placeimg.com/1300/552/tech`,
        imagePreview: `img/what-we-do-in-the-shadows.jpg`,
        poster: `https://placeimg.com/270/410/arch/grayscale`,
        title: `What We Do in the Shadows`,
        genre: `Drama`,
        date: `2019`,
        description: `A look into the daily (or rather, nightly) lives of three vampires, who've lived together for over 100 years, on Staten Island.`,
        rating: `8.5`,
        ratingCount: `850`,
        director: `Jemaine Clement`,
        stars: [`Kayvan Novak`, `Matt Berry`, `Natasia Demetriou`],
        duration: `1h 39m`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      },
      {
        id: 7,
        background: `https://placeimg.com/1300/552/tech`,
        imagePreview: `img/revenant.jpg`,
        poster: `https://placeimg.com/270/410/arch/grayscale`,
        title: `Revenant`,
        genre: `Biography`,
        date: `2015`,
        description: `A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.`,
        rating: `8.0`,
        ratingCount: `730`,
        director: `Alejandro G.`,
        stars: [`Leonardo DiCaprio`, `Tom Hardy`, `Will Poulter`],
        duration: `1h 39m`,
        preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      },
    ];

    const store = mockStore({
      [NameSpace.MOVIE_CARD]: {
        displayedMoviesCards: 8,
      },
      [NameSpace.GENRE]: {
        currentGenre: `All genres`,
      },
      [NameSpace.DATA]: {
        moviesCards,
      }
    });

    const component = renderIgnoringUnstableFlushDiscreteUpdates(
        <Provider store={store}>
          <Router
            history={history}
          >
            <MovieList
              moviesCards={moviesCards}
              displayedMoviesCards={8}
              onShowMoreButtonClick={() => {}}
            />
          </Router>
        </Provider>
    );

    expect(component.find(`.catalog__button`).length).toBe(0);
  });

});
