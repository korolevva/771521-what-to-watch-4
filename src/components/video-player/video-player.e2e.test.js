import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from './video-player.jsx';

const renderIgnoringUnstableFlushDiscreteUpdates = (component) => {
  /* eslint-disable no-console */
  const originalError = console.error;
  const error = jest.fn();
  console.error = error;
  const result = mount(component);
  expect(error).toHaveBeenCalledTimes(1);
  expect(error).toHaveBeenCalledWith(`Warning: unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering.%s`, expect.any(String));
  console.error = originalError;
  /* eslint-enable no-console */
  return result;
};

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

  it(`if isPlaying is true, metod play has been called`, () => {
    const isPlaying = false;

    const playStub = jest
      .spyOn(window.HTMLMediaElement.prototype, `play`)
      .mockImplementation(() => {});

    const main = renderIgnoringUnstableFlushDiscreteUpdates(
        <VideoPlayer
          card={card}
          isPlaying={isPlaying}
        />
    );

    main.setProps({isPlaying: true});

    expect(playStub).toHaveBeenCalled();
  });

});
