import * as React from "react";
import PropTypes from "prop-types";

const ShowMore = ({onShowMoreButtonClick}) => {
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

ShowMore.propTypes = {
  onShowMoreButtonClick: PropTypes.func.isRequired,
};

export default ShowMore;
