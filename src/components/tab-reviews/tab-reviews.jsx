import React from "react";
import PropTypes from "prop-types";

const TabReviews = ({reviews}) => {
  const separatingIndex = Math.ceil(reviews.length / 2);
  const leftColumnReviews = reviews.slice(0, separatingIndex);
  const rightColumnReviews = reviews.slice(separatingIndex, reviews.length);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {leftColumnReviews.map((review) => {
          const {id, text, author, date, rating} = review;
          return (
            <div key={id} className="review">
              <blockquote className="review__quote">
                <p className="review__text">{text}</p>

                <footer className="review__details">
                  <cite className="review__author">{author}</cite>
                  <time className="review__date" dateTime="2015-11-18">{date}</time>
                </footer>
              </blockquote>

              <div className="review__rating">{rating}</div>
            </div>
          );
        })}
      </div>
      <div className="movie-card__reviews-col">
        {rightColumnReviews.map((review) => {
          return (
            <div key={review.id} className="review">
              <blockquote className="review__quote">
                <p className="review__text">{review.text}</p>

                <footer className="review__details">
                  <cite className="review__author">{review.author}</cite>
                  <time className="review__date" dateTime="2015-11-18">{review.date}</time>
                </footer>
              </blockquote>

              <div className="review__rating">{review.rating}</div>
            </div>);
        })}
      </div>
    </div>
  );
};

TabReviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.string,
    date: PropTypes.string,
    rating: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
};

export default TabReviews;
