import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header.jsx';
import {Router} from "react-router-dom";
import history from "../../history.js";

describe(`Render Header`, () => {
  it(`Render MovieCard with avatar`, () => {
    const tree = renderer.create(
        <Router
          history={history}
        >
          <Header
            authorizationStatus={`AUTH`}
            onSignInClick={() => { }}
          />
        </Router>,
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
        <Router
          history={history}
        >
          <Header
            authorizationStatus={`NO_AUTH`}
            onSignInClick={() => { }}
          />,
        </Router>,
        {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
