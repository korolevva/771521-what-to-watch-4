import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCardPreview from "../movie-card-preview/movie-card-preview.jsx";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };
  }

  render() {
    const {moviesCards, onCardTitleClick} = this.props;

    return (
      <React.Fragment>
        {moviesCards.map((card) => (
          <MovieCardPreview
            key={`${card.id}`}
            card={card}
            onCardTitleClick={onCardTitleClick}
          />
        ))}
      </React.Fragment>
    );
  }
}

MovieList.propTypes = {
  moviesCards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    poster: PropTypes.string,
    title: PropTypes.string,
    previewMp4: PropTypes.string,
    previewWebm: PropTypes.string,
  })).isRequired,
  onCardTitleClick: PropTypes.func.isRequired
};

export default MovieList;
