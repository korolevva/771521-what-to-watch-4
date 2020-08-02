import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShowMore from "./show-more.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`ShowMore`, () => {
  const onShowMoreButtonClick = jest.fn();

  it(`Simulate click on a ShowMoreButton`, () => {
    const component = shallow(
        <ShowMore
          onShowMoreButtonClick={onShowMoreButtonClick}
        />
    );

    const button = component.find(`.catalog__button`);

    button.simulate(`click`, {
      preventDefault: () => {
      }
    });

    expect(onShowMoreButtonClick).toHaveBeenCalledTimes(1);
  });
});

