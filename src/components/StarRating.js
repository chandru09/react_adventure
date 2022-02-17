import { React, useState } from "react";
import { FaStar } from "react-icons/fa";
import "./../App.css";

function StarRating() {
  const [rating, setRating] = useState();
  const [hover, setHover] = useState();
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              size={27}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              className="star"
            />
          </label>
        );
      })}
    </div>
  );
}

export default StarRating;
