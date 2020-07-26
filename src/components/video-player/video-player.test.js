import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";
import {moviesCards} from "../../mocks/testMoviesCards.js";

const card = moviesCards[0];

it(`Render VideoPlayer`, () => {
  const tree = renderer
    .create(
        <VideoPlayer
          card={card}
          isPlaying={true}
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
