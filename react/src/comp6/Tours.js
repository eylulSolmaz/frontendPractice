import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <div>
      <h2>Our tours</h2>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
        {/*  <Tour key={tour.id} tour={tour} removeTour={removeTour} */}
      </div>
    </div>
  );
};

export default Tours;
