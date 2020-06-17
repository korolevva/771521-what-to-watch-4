import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = ({genre, year, moviesNames}) => {
  return (
    <Main genre={genre} year={year} moviesNames={moviesNames} />
  );
};

App.propTypes = {
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  moviesNames: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default App;
