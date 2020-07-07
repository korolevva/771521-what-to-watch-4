import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from './video-player.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const card = {
  id: 1,
  poster: `img/bohemian-rhapsody.jpg`,
  title: `Bohemian Rhapsody`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

describe(`VideoPlayer`, () => {

  it(`should have prop isPlaying true`, () => {
    const isPlaying = true;
    const main = mount(
        <VideoPlayer
          card={card}
          isPlaying={isPlaying}
        />,
        {
          createNodeMock: () => {
            return {};
          }
        }
    );

    expect(main.prop(`isPlaying`)).toBe(true);
  });

  it(`should have prop isPlaying false`, () => {
    const isPlaying = false;
    const main = mount(
        <VideoPlayer
          card={card}
          isPlaying={isPlaying}
        />,
        {
          createNodeMock: () => {
            return {};
          }
        }
    );

    expect(main.prop(`isPlaying`)).toBe(false);
  });

});
