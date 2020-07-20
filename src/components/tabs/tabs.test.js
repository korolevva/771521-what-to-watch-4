import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs.jsx";

const tabs = [`Overview`, `Details`, `Reviews`];

const activeTab = `Overview`;

it(`Render Tabs`, () => {
  const tree = renderer
    .create(<Tabs
      tabs={tabs}
      activeTab={activeTab}
      onTabClick={() => {}}
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
