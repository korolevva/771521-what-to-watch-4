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
          moviesCards={moviesCards}
          onCardTitleClick={() => {}}
          onCardClick={() => {}}
          resetTimeStamp={true}
          muted={true}
          width="280"
          height="175"
          isPlaying={false}
          controls={false}
          poster={card.imagePreview}
          autoPlay={false}
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
