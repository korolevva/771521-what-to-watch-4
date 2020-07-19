import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import moviesCards from "./mocks/films.js";
import reviews from "./mocks/reviews.js";

const movieCard = {
  genre: `Drama`,
  year: 2014
};

ReactDOM.render(
    <App
      genre={movieCard.genre}
      year={movieCard.year}
      moviesCards={moviesCards}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);
