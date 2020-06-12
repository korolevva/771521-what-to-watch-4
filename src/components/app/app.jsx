import React from "react";
import Main from "../main/main.jsx";
// eslint-disable-next-line react/prop-types
const App = ({genre, year, namesMovies}) => {
  return (
    <Main genre={genre} year={year} namesMovies={namesMovies} />
  );
};

export default App;
