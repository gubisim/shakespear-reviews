import { Link } from "react-router-dom";
import React from "react";

export default function Brand() {
  return (
    <Link to="/">
      <div className="brand">Shakespeare Reviews</div>
    </Link>
  );
}
