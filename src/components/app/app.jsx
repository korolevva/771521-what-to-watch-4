import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {genre, year} = props;
  return (
    <Main genre={genre} year={year} />
  );
};

export default App;
