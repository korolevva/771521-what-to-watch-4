import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCardPreview from "../movie-card-preview/movie-card-preview.jsx";
// = ({moviesCards, onMovieCardTitleClick}) =>
class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    // this.state = {

    // }
  }

  render() {
    const {moviesCards, onMovieCardTitleClick} = this.props;

    return (
      <React.Fragment>
        {moviesCards.map((card, i) => (
          <MovieCardPreview
            key={`${i}-${card.src}`}
            name={card.title}
            link={card.src}
            onMovieCardTitleClick={onMovieCardTitleClick}
          />
        ))}
      </React.Fragment>
    );
  }
}

MovieList.propTypes = {
  moviesCards: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    title: PropTypes.string,
  })).isRequired,
  onMovieCardTitleClick: PropTypes.func.isRequired
};

export default MovieList;
