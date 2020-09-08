import * as React from "react";
import {PureComponent, Fragment} from "react";
import {ReviewLength, RATING_DEFAULT, RATING_COUNT} from "../../const";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";
import {Movie, User} from "../../types";

interface State {
  rating: number,
  comment: string,
}

interface Props {
  user: User,
  movieCard: Movie,
  onReviewSubmit: (id: number, review: {rating: number, comment: string}) => void,
  isDataSending: boolean,
  isErrorLoading: boolean,
  movieCardId: number,
}

class AddReview extends PureComponent<Props, State> {
  props: Props;
  state: State;

  constructor(props) {
    super(props);

    this.state = {
      rating: RATING_DEFAULT,
      comment: ``,
    };

    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRatingChange(evt) {
    this.setState({
      rating: evt.target.value,
    });
  }

  handleCommentChange(evt) {
    this.setState({
      comment: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const {movieCard, onReviewSubmit} = this.props;
    const review = {
      rating: this.state.rating,
      comment: this.state.comment,
    };
    onReviewSubmit(movieCard.id, review);
  }

  render() {
    const {movieCard, isErrorLoading, isDataSending, movieCardId, user} = this.props;
    const {comment, rating} = this.state;
    const {background, title, poster} = movieCard;

    const getRatingItem = (item, index) => {
      const key = `star-${index + 1}`;
      return (
        <Fragment key={key}>
          <input
            onChange={this.handleRatingChange}
            className="rating__input"
            id={key}
            type="radio"
            name="rating"
            value={index + 1}
          />
          <label className="rating__label" htmlFor={key}>Rating {index}</label>
        </Fragment>
      );
    };

    const ratingMarkup = () => new Array(RATING_COUNT).fill(``).map(getRatingItem);
    const errorMarkup = () => {
      return isErrorLoading
        ? (<p style={{color: `red`, textAlign: `center`}}>Sending error. Please, try again.</p>)
        : null;
    };

    const isCommentWritten = comment.length >= 50;
    const isGradeGiven = rating > RATING_DEFAULT;
    const isSubmitButtonDisabled = !(isCommentWritten && isGradeGiven);
    const isFormDisabled = isErrorLoading || isDataSending;

    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={background} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <Link to={AppRoute.ROOT} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`${AppRoute.MOVIE_CARD}/${movieCardId}`} className="breadcrumbs__link">{title}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <Link to={`/films/${movieCardId}${AppRoute.REVIEW}`} className="breadcrumbs__link">Add review</Link>
                </li>
              </ul>
            </nav>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src={user.avatarUrl} alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={poster} alt={`${title} poster`} width="218" height="327" />
          </div>
        </div>
        <div className="add-review">
          {errorMarkup()}
          <form action="#" className="add-review__form" onSubmit={(evt) => this.handleSubmit(evt)}>
            <fieldset style={{border: 0}} disabled={isFormDisabled}>
              <div className="rating">
                <div className="rating__stars">
                  {ratingMarkup()}
                </div>
              </div>

              <div className="add-review__text">
                <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
                  minLength={ReviewLength.MIN}
                  maxLength={ReviewLength.MAX}
                  onChange={this.handleCommentChange}
                ></textarea>
                <div className="add-review__submit">
                  <button className="add-review__btn" type="submit" disabled={isSubmitButtonDisabled}>Post</button>
                </div>

              </div>
            </fieldset>

          </form>
        </div>
      </section>
    );
  }
}

export default AddReview;
