import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = ({genre, year, moviesCards}) => {

  const movieCardTitleHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Main
      genre={genre}
      year={year}
      moviesCards={moviesCards}
      onMovieCardTitleClick={movieCardTitleHandler}
    />
  );
};

App.propTypes = {
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  moviesCards: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    title: PropTypes.string,
  })).isRequired,
};

export default App;
