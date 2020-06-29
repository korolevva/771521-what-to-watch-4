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
        {moviesCards.map((card, i) => (
          <MovieCardPreview
            key={`${i}-${card.src}`}
            name={card.title}
            link={card.src}
            card={card}
            onCardTitleClick={onCardTitleClick}
            onCardHover={(cardName) => {
              this.setState({
                activeCard: cardName,
              });
            }}
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
  onCardTitleClick: PropTypes.func.isRequired
};

export default MovieList;
