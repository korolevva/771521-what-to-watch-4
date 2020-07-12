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

  it(`if isPlaying is true, then paused is false`, () => {
    const isPlaying = true;

    const main = mount(
        <VideoPlayer
          card={card}
          isPlaying={isPlaying}
        />
    );

    const video = main.find(`video`);

    video.simulate(`play`);

    expect(video.getDOMNode().paused).toBe(false);
  });

});
