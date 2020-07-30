import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import MovieCard from "../movie-card/movie-card.jsx";
import PropTypes from "prop-types";
import reviews from "../../mocks/reviews.js";
import {promoMovie} from "../../mocks/promoMovie.js";

// const testMovieCard = {
//   id: 1,
//   background: `img/bg-the-grand-budapest-hotel.jpg`,
//   imagePreview: `img/bohemian-rhapsody.jpg`,
//   poster: `https://placeimg.com/270/410/arch/grayscale`,
//   title: `Bohemian Rhapsody`,
//   genre: `Biography`,
//   date: `2018`,
//   description: `The story of the legendary British rock band Queen and lead singer Freddie Mercury`,
//   rating: `8.0`,
//   ratingCount: `305`,
//   director: `Bryan Singer`,
//   stars: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
//   duration: `1h 39m`,
//   preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
// };

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
    const {moviesCards} = this.props;
    const {selectedMovie} = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {selectedMovie
              ? <MovieCard
                card={selectedMovie}
                moviesCards={moviesCards}
                reviews={reviews}
                onCardTitleClick={this._cardTitleHandler}
                onCardClick={this._cardHandler}/>
              : <Main
                promoMovie={promoMovie}
                moviesCards={moviesCards}
                onCardTitleClick={this._cardTitleHandler}
                onCardClick={this._cardHandler}
              />
            }
          </Route>
          <Route exact path="/card">
            <MovieCard card={moviesCards[0]} moviesCards={moviesCards} reviews={reviews} onCardTitleClick={this._cardTitleHandler} onCardClick={this._cardHandler} />
          </Route>
        </Switch>
      </BrowserRouter >
    );
  }
}

const mapStateToProps = (store) => ({
  moviesCards: store.genre.movies,
});

App.propTypes = {
  moviesCards: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
