import { useMemo } from "react";
import "../css/Stars.css";
import React from "react";

export default function Stars({ rating, small }: { rating: number, small: boolean}) {
  const stars = useMemo(() => {
    let starRating = rating;
    let starComponents = [];
    for (let i = 0; i < 5; i++) {
      if (starRating >= 1) {
        starComponents.push(<Star small={small}/>);
      } else if (starRating >= 0) {
        starComponents.push(<HalfStar small={small}/>);
      } else {
        starComponents.push(<EmptyStar small={small}/>);
      }
      starRating = starRating - 1;
    }
    return starComponents;
  }, [rating]);
  return (
    <div title={`${rating} rating`}>
      {stars &&
        stars.map((component, index) => <span key={index}>{component}</span>)}
    </div>
  );
}

function Star({small}) {
  return <img src="/src/images/star.svg" alt="Filled in star" className={small ? 'small-star' : 'medium-star'}/>;
}
function HalfStar({small}) {
  return <img src="/src/images/half-star.svg" alt="Half filled in star" className={small ? 'small-star' : 'medium-star'}/>;
}
function EmptyStar({small}) {
  return <img src="/src/images/empty-star.svg" alt="Empty star" className={small ? 'small-star' : 'medium-star'}/>;
}