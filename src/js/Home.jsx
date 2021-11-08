import "../css/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="main-container flex">
        <div className="content-container">
          <Link to="/">
            <div className="brand">Shakespeare Reviews</div>
          </Link>
          <h1 className="headline">
            100+ reviews of Shakespeare's beloved classics
          </h1>
          <p className="content sub-headline">
            See what the thinkers of today are saying and how they are
            interpreting the works of William Shakespeare.
          </p>
          <Link to="/reviews">
            <button className="primary-button">Read Reviews</button>
          </Link>
        </div>
        <div className="image-container"></div>
      </div>
    </div>
  );
}
