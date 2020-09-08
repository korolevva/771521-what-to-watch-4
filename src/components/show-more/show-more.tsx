import * as React from "react";

interface Props {
  onShowMoreButtonClick: () => void,
}

const ShowMore: React.FunctionComponent<Props> = ({onShowMoreButtonClick}:Props) => {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button"
        onClick={(evt) => {
          evt.preventDefault();
          onShowMoreButtonClick();
        }}
      >Show more</button>
    </div>
  );
};

export default ShowMore;
