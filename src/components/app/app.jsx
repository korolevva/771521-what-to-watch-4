import React from "react";
import Main from "../main/main.jsx";
// eslint-disable-next-line react/prop-types
const App = ({genre, year, moviesNames}) => {
  return (
    <Main genre={genre} year={year} moviesNames={moviesNames} />
  );
};

export default App;
