import * as React from "react";
import * as moment from "moment";
import {Review} from "../../types";

interface Props {
  reviews: Array<Review>,
}

const TabReviews: React.FunctionComponent<Props> = ({reviews}:Props) => {
  const separatingIndex = Math.ceil(reviews.length / 2);
  const leftColumnReviews = reviews.slice(0, separatingIndex);
  const rightColumnReviews = reviews.slice(separatingIndex, reviews.length);
  const renderReviewMarkup = (column) => (
    column.map((review) => {
      const {id, comment, user, rating} = review;
      const date = moment(review.date).format(`MMMM D, YYYY`);
      const dateTime = moment(review.date).format(`YYYY-MM-DD`);
      return (
        <div key={id} className="review">
          <blockquote className="review__quote">
            <p className="review__text" style={{wordBreak: `break-all`}}>{comment}</p>

            <footer className="review__details">
              <cite className="review__author">{user.name}</cite>
              <time className="review__date" dateTime={dateTime}>{date}</time>
            </footer>
          </blockquote>

          <div className="review__rating">{rating}</div>
        </div>
      );
    })
  );

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {renderReviewMarkup(leftColumnReviews)}
      </div>
      <div className="movie-card__reviews-col">
        {renderReviewMarkup(rightColumnReviews)}
      </div>
    </div>
  );
};

export default TabReviews;
