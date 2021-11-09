import "../css/Home.css";
import { Link } from "react-router-dom";
import React from "react";
import Brand from "./Brand";

export default function Home() {
  return (
    <div>
      <div className="main-container flex">
        <div className="content-container">
          <Brand/>
          <h1 className="headline">
            100+ reviews of Shakespeare&apos;s beloved classics
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
