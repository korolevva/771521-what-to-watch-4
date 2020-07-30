import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs.jsx";
import {Tab} from "../movie-card/movie-card.jsx";

const tabs = Object.values(Tab);
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
