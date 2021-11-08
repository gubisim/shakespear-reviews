import Brand from "./Brand";
import Stars from "./Stars";
import "../css/Reviews.css";

export default function Reviews() {
  return (
    <div className="page">
      <Brand />
      <div className="reviews-header flex align-items-center">
        <div className="text-muted rating-description">Overall Rating</div>
        <h1 className="overall-rating">3.5</h1>
        <Stars rating={3.5} />
      </div>
      <div className="button-group">
        <button className="sorting-button">Highest Rating</button>
        <button className="sorting-button">Lowest Rating</button>
        <button className="sorting-button">Most Recent</button>
        <button className="sorting-button">Oldest</button>
      </div>
      <div className="review">
        <Stars rating={3.5} small={true}/>
        <p className="review-body">"The fool doth think he is wise, but the wise man knows himself to be a fool."</p>
        <p><span className="review-author">Kaley Schiller</span> <span className="text-muted review-date">October 23, 2016</span></p>
      </div>
    </div>
  );
}
