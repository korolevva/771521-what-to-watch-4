import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const movieData = {
  genre: `Drama`,
  year: 2014
};

ReactDOM.render(
    <App genre={movieData.genre} year={movieData.year} />,
    document.querySelector(`#root`)
);
