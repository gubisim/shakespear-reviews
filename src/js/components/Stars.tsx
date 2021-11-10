import "../../css/Stars.css";
import React, {useMemo} from 'react';
import star from '../../images/star.svg';
import halfStar from '../../images/half-star.svg';
import emptyStar from '../../images/empty-star.svg';

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
  }, [rating, small]);
  return (
    <div title={`${rating} rating`}>
      {stars &&
        stars.map((component, index) => <span key={index}>{component}</span>)}
    </div>
  );
}

function Star({small} : {small: boolean}) {
  return <img src={star} alt="Filled in star" className={small ? 'small-star' : 'medium-star'}/>;
}
function HalfStar({small} : {small: boolean}) {
  return <img src={halfStar} alt="Half filled in star" className={small ? 'small-star' : 'medium-star'}/>;
}
function EmptyStar({small} : {small: boolean}) {
  return <img src={emptyStar} alt="Empty star" className={small ? 'small-star' : 'medium-star'}/>;
}