import React from "react";
import renderer from "react-test-renderer";
import MovieList from "./movie-list.jsx";

const moviesCards = [
  {
    id: 1,
    poster: `img/bohemian-rhapsody.jpg`,
    title: `Bohemian Rhapsody`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    id: 2,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    id: 3,
    poster: `img/macbeth.jpg`,
    title: `Macbeth`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    id: 4,
    poster: `img/aviator.jpg`,
    title: `Aviator`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    id: 5,
    poster: `img/we-need-to-talk-about-kevin.jpg`,
    title: `We need to talk about Kevin`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    id: 6,
    poster: `img/what-we-do-in-the-shadows.jpg`,
    title: `What We Do in the Shadows`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    id: 7,
    poster: `img/revenant.jpg`,
    title: `Revenant`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    id: 8,
    poster: `img/johnny-english.jpg`,
    title: `Johnny English`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
];

it(`Render MovieList`, () => {
  const tree = renderer
    .create(<MovieList
      moviesCards={moviesCards}
      onCardTitleClick={() => {}}
    />,
    {
      createNodeMock: () => {
        return {};
      }
    }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
