import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header.jsx';

describe(`Render Header`, () => {
  it(`Render MovieCard with avatar`, () => {
    const tree = renderer.create(
        <Header
          authorizationStatus={`AUTH`}
          onSignInClick={() => {}}
        />,
        {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render MovieCard without avatar`, () => {
    const tree = renderer.create(
        <Header
          authorizationStatus={`NO_AUTH`}
          onSignInClick={() => {}}
        />,
        {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
