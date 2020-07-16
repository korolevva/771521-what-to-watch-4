import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

const card = {
  id: 1,
  background: `img/bg-the-grand-budapest-hotel.jpg`,
  imagePreview: `img/bohemian-rhapsody.jpg`,
  poster: `https://placeimg.com/270/410/arch/grayscale`,
  title: `Bohemian Rhapsody`,
  genre: ` Biography, Drama, Music`,
  date: `2018`,
  description: `The story of the legendary British rock band Queen and lead singer Freddie Mercury`,
  rating: `8.0`,
  ratingCount: `305`,
  director: `Bryan Singer`,
  stars: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
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
