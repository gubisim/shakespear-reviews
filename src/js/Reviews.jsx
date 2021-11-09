import Brand from "./Brand";
import Stars from "./Stars";
import "../css/Reviews.css";
import { useState, useEffect, useMemo } from "react";
import { orderBy } from "lodash";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("DATE_DESC");

  function formatDate(date) {
    const formattedDate = new Date(date);
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return formattedDate.toLocaleString(options);
  }

  function sort(sortMethod) {
    if (sortMethod === sortBy) {
      return;
    }
    setSortBy(sortMethod);
    switch (sortMethod) {
      case "DATE_ASC":
        setReviews(orderBy(reviews, (x) => x.publish_date, "asc"))
        break;
      case "DATE_DESC":
        setReviews(orderBy(reviews, (x) => x.publish_date, "desc"))
        break;
      case "RATING_ASC":
        setReviews(orderBy(reviews, (x) => x.rating, "asc"))
        break;
      case "RATING_DESC":
        setReviews(orderBy(reviews, (x) => x.rating, "desc"))
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    fetch("https://shakespeare.podium.com/api/reviews", {
      method: "GET",
      headers: new Headers({
        "x-api-key": "H3TM28wjL8R4#HTnqk?c",
      }),
    })
      .then(async (response) => {
        const res = await response.json() 
        setReviews(orderBy(res, (x) => x.publish_date, "desc"));
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const averageRating = useMemo(() => {
    let total = 0;
    if (reviews.length) {
      for (let review of reviews) {
        total += review.rating;
      }
      return total / reviews.length + 1;
    }
    return total;
  }, [reviews]);

  if (isLoading) {
    return <div className="page">
      <Brand />
      <div className="spinner"/>
    </div>
  }

  return (
    <div className="page">
      <Brand />
      <div className="reviews-header flex align-items-center">
        <div className="text-muted rating-description">Average Rating</div>
        <h1 className="overall-rating">{averageRating.toFixed(1)}</h1>
        <Stars rating={averageRating.toFixed(1)} />
      </div>
      <div className="flex flex-col align-items-center">
      <div className="button-group">
        <button
          onClick={() => sort("DATE_DESC")}
          className={`sorting-button ${sortBy === "DATE_DESC" ? "active" : ""}`}
        >
          Most Recent
        </button>
        <button
          onClick={() => sort("DATE_ASC")}
          className={`sorting-button ${sortBy === "DATE_ASC" ? "active" : ""}`}
        >
          Oldest
        </button>
        <button
          onClick={() => sort("RATING_DESC")}
          className={`sorting-button ${
            sortBy === "RATING_DESC" ? "active" : ""
          }`}
        >
          Highest Rating
        </button>
        <button
          onClick={() => sort("RATING_ASC")}
          className={`sorting-button ${
            sortBy === "RATING_ASC" ? "active" : ""
          }`}
        >
          Lowest Rating
        </button>
      </div>
        {reviews &&
          reviews.map((review) => (
            <div className="review" key={review.id}>
              <Stars rating={review.rating} small={true} />
              <p className="review-body">{review.body}</p>
              <p>
                <span className="review-author">{review.author}</span>{" "}
                <span className="text-muted review-date">
                  {formatDate(review.publish_date)}
                </span>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
