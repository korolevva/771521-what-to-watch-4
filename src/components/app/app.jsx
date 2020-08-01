import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import MovieCard from "../movie-card/movie-card.jsx";
import PropTypes from "prop-types";
import reviews from "../../mocks/reviews.js";
import {promoMovie} from "../../mocks/promoMovie.js";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: null,
    };


    this._cardTitleHandler = this._cardTitleHandler.bind(this);
    this._cardHandler = this._cardHandler.bind(this);
  }

  _cardTitleHandler(card) {

    this.setState(() => {
      return {selectedMovie: card};
    });
  }

  _cardHandler(card) {
    this.setState(() => {
      return {selectedMovie: card};
    });
  }

  render() {
    const {movies} = this.props;
    const {selectedMovie} = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {selectedMovie
              ? <MovieCard
                card={selectedMovie}
                moviesCards={movies}
                reviews={reviews}
                onCardTitleClick={this._cardTitleHandler}
                onCardClick={this._cardHandler}/>
              : <Main
                promoMovie={promoMovie}
                moviesCards={movies}
                onCardTitleClick={this._cardTitleHandler}
                onCardClick={this._cardHandler}
              />
            }
          </Route>
          <Route exact path="/card">
            <MovieCard card={movies[0]} moviesCards={movies} reviews={reviews} onCardTitleClick={this._cardTitleHandler} onCardClick={this._cardHandler} />
          </Route>
        </Switch>
      </BrowserRouter >
    );
  }
}

const mapStateToProps = (store) => ({
  movies: store.genre.movies,
});

App.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
