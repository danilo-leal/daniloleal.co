import React, { useState } from 'react';
import { HiStar } from 'react-icons/hi';
import getRating from '../../data/rating/read-and-write';

export default function Star() {
  var counter = 0;
  const [rating, setRating] = useState();
  const [total, setTotal] = useState();
  getRating().then((ratingInfo) => {
    console.log('cesar');
    counter = ratingInfo.counter;
    setTotal(ratingInfo.stars);
  });

  return (
    <div className="py-8">
      <p className="text-draplin font-semibold ml-1">Ratings total:{total}</p>
      <div className="grid gap-3 p-8 border border-gray-200 rounded-lg transition-all hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-black">
        <h2 className="h1 mt-0 mb-1 text-center">
          Hey, what did you think of this piece?
        </h2>
        <p className="paragraph-1 text-center mb-2">
          This write-up is a...
          <span className="text-draplin font-semibold ml-1">
            {rating} stars.
          </span>
        </p>
        <div className="flex space-x-2 justify-center">
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <label>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => {
                    setRating(ratingValue);
                    setTotal(total + ratingValue / (counter + 1));
                  }}
                />
                <HiStar
                  className="star-rating"
                  size={24}
                  color={ratingValue <= rating ? '#e57928' : ''}
                />
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}
