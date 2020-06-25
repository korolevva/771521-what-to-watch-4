import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const moviesCards = [
  {
    src: `img/bohemian-rhapsody.jpg`,
    title: `Bohemian Rhapsody`,
  }, {
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
  }, {
    src: `img/macbeth.jpg`,
    title: `Macbeth`,
  }, {
    src: `img/aviator.jpg`,
    title: `Aviator`,
  }, {
    src: `img/we-need-to-talk-about-kevin.jpg`,
    title: `We need to talk about Kevin`,
  }, {
    src: `img/what-we-do-in-the-shadows.jpg`,
    title: `What We Do in the Shadows`,
  }, {
    src: `img/revenant.jpg`,
    title: `Revenant`,
  }, {
    src: `img/johnny-english.jpg`,
    title: `Johnny English`,
  },
];

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      genre={`Drama`}
      year={2014}
      moviesCards={moviesCards}
      onCardTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
