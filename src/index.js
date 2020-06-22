import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import moviesCards from "./mocks/films.js";

const movieCard = {
  genre: `Drama`,
  year: 2014
};

// const moviesNames = [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`, `We need to talk about Kevin`, `What We Do in the Shadows`, `Revenant`, `Johnny English`, `Shutter Island`, `Pulp Fiction`, `No Country for Old Men`, `Snatch`, `Moonrise Kingdom`, `Seven Years in Tibet`, `Midnight Special`, `War of the Worlds`, `Dardjeeling Limited`, `Orlando`, `Mindhunter`, `Midnight Special`];

ReactDOM.render(
    <App genre={movieCard.genre} year={movieCard.year} moviesCards={moviesCards} />,
    document.querySelector(`#root`)
);
