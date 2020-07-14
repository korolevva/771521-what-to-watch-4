import React, {PureComponent} from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
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

  _renderApp() {
    const {selectedMovie} = this.state;

    if (selectedMovie) {
      return this._renderMovieCard();
    } else {
      return this._renderMain();
    }
  }

  _renderMain() {
    const {genre, year, moviesCards} = this.props;

    return (
      <Main
        genre={genre}
        year={year}
        moviesCards={moviesCards}
        onCardTitleClick={this._cardTitleHandler}
        onCardClick={this._cardHandler}
      />
    );
  }

  _renderMovieCard() {
    return (
      <MovieCard />
    );
  }

  _cardTitleHandler(evt, movie) {
    evt.preventDefault();
    this.setState({
      selectedMovie: movie,
    });
  }

  _cardHandler(movie) {
    this.setState({
      selectedMovie: movie
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/card">
            {this._renderMovieCard()}
          </Route>
        </Switch>
      </BrowserRouter>
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
