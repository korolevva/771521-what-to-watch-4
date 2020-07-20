import React from "react";
import renderer from "react-test-renderer";
import TabDetails from "./tab-details.jsx";

const card = {
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
};

it(`Render TabDetails`, () => {
  const tree = renderer
    .create(<TabDetails
      card={card}
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
