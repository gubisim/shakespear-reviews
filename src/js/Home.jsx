import "../css/Home.css";

export default function Home() {
  return (
    <div>
      <div className="main-container flex">
        <div className="content-container">
          <div className="brand">
            <a>Shakespeare Reviews</a>
          </div>
          <h1 className="headline">
            100+ reviews of Shakespeare's beloved classics
          </h1>
          <p className="content sub-headline">
            See what the thinkers of today are saying and how they are interpreting the works of William Shakespeare.
          </p>
          <button className="primary-button">Read Reviews</button>
        </div>
        <div className="image-container"></div>
      </div>
    </div>
  );
}
