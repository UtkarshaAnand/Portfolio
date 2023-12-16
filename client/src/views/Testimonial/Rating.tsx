import React, { useState } from "react";

const StarRating = ({
  onRatingSelect,
  rating = 0,
  viewOnly = false,
}: {
  onRatingSelect?: (star: number) => any;
  rating?: number;
  viewOnly?: boolean;
}) => {
  const [hover, setHover] = useState(0);

  const handleStarClick = (star: number) => {
    onRatingSelect?.(star);
  };

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const starValue = index + 1;

        return (
          <svg
            key={starValue}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox={viewOnly ? "0 0 28 28" : "0 0 24 24"}
            fill={(hover || rating) >= starValue ? "#ffc107" : "transparent"}
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-star"
            {...(!viewOnly
              ? {
                  onClick: (e) => handleStarClick(starValue),
                  onMouseEnter: () => setHover(starValue),
                  onMouseLeave: () => setHover(0),
                }
              : {})}
            style={{ marginRight: viewOnly ? "8px" : "12px" }}
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        );
      })}
    </div>
  );
};

export default StarRating;
