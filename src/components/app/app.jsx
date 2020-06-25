import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = ({genre, year, moviesCards}) => {

  const CardTitleHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Main
      genre={genre}
      year={year}
      moviesCards={moviesCards}
      onCardTitleClick={CardTitleHandler}
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
