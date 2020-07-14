import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import moviesCards from "./mocks/films.js";

const movieCard = {
  genre: `Drama`,
  year: 2014
};

ReactDOM.render(
    <App genre={movieCard.genre} year={movieCard.year} moviesCards={moviesCards} />,
    document.querySelector(`#root`)
);
