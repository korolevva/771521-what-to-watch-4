import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Tabs from "./tabs.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const tabs = [`Overview`, `Details`, `Reviews`];

describe(`Tabs`, () => {

  it(`Simulate click on Overview`, () => {
    const activeTab = `Overview`;
    const onTabClick = jest.fn();

    const main = shallow(
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onTabClick={onTabClick}
        />
    );

    const tabOverview = main.find(`.movie-nav__item`).at(0);
    const tabOverviewLink = tabOverview.find(`.movie-nav__link`);

    tabOverviewLink.simulate(`click`, {preventDefault: () => {}});
    expect(onTabClick).toHaveBeenCalledTimes(1);
  });

  it(`Simulate click on Details`, () => {
    const activeTab = `Details`;
    const onTabClick = jest.fn();

    const main = shallow(
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onTabClick={onTabClick}
        />
    );

    const tabDetails = main.find(`.movie-nav__item`).at(1);
    const tabDetailsLink = tabDetails.find(`.movie-nav__link`);

    tabDetailsLink.simulate(`click`, {preventDefault: () => {}});
    expect(onTabClick).toHaveBeenCalledTimes(1);
  });

  it(`Simulate click on Reviews`, () => {
    const activeTab = `Reviews`;
    const onTabClick = jest.fn();

    const main = shallow(
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onTabClick={onTabClick}
        />
    );

    const tabReviews = main.find(`.movie-nav__item`).at(1);
    const tabReviewsLink = tabReviews.find(`.movie-nav__link`);

    tabReviewsLink.simulate(`click`, {preventDefault: () => {}});
    expect(onTabClick).toHaveBeenCalledTimes(1);
  });
});
