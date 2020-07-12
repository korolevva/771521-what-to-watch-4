import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

const card = {
  id: 1,
  poster: `img/bohemian-rhapsody.jpg`,
  title: `Bohemian Rhapsody`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

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
