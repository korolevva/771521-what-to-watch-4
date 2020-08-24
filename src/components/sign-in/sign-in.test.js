import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in.jsx";

it(`SignIn component render correctly`, () => {
  const tree = renderer.create(
      <SignIn
        onSubmit={() => {}}
        isErrorAuth={false}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
