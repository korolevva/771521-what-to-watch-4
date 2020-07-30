import React, {PureComponent} from "react";
import {connect} from "react-redux";
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
    const {moviesCards, onCardTitleClick, onCardClick} = this.props;

    return (
      <React.Fragment>
        {moviesCards.map((card) => (
          <MovieCardPreview
            key={`${card.id}`}
            card={card}
            moviesCards={moviesCards}
            onCardTitleClick={onCardTitleClick}
            onCardClick={onCardClick}
          />
        ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (store) => ({
  moviesCards: store.genre.moviesByGenre,
});

MovieList.propTypes = {
  moviesCards: PropTypes.array.isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(MovieList);
