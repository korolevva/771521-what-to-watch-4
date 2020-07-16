import React, { PureComponent } from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Main from "../main/main.jsx";
import MovieCard from "../movie-card/movie-card.jsx";
import PropTypes from "prop-types";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: null,
    };


    this._cardTitleHandler = this._cardTitleHandler.bind(this);
    this._cardHandler = this._cardHandler.bind(this);
  }

  _cardTitleHandler (evt, card) {
    evt.preventDefault();
    this.setState({
      selectedMovie: card,
    });
  }

  _cardHandler (card) {
    this.setState({
      selectedMovie: card
    });
  }

  render() {
    const {genre, year, moviesCards} = this.props;
    const {selectedMovie} = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {selectedMovie ? <MovieCard movie={selectedMovie} />
              : <Main
                genre={genre}
                year={year}
                moviesCards={moviesCards}
                onCardTitleClick={this._cardTitleHandler}
                onCardClick={this._cardHandler}
              />
            }
          </Route>
        <Route exact path="/card">
          <MovieCard movie={selectedMovie} />
        </Route>
        </Switch>
      </BrowserRouter >
    );
  }
}

App.propTypes = {
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  moviesCards: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    title: PropTypes.string,
  })).isRequired,
};

export default App;
