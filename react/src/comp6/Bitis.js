import axios from "axios";
import React, { useEffect, useState } from "react";

import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";
const Bitis = () => {
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    dataTours();
  }, []);
  const dataTours = () => {
    axios(url).then((resp) => {
      setTours(resp.data);
    });
  };
  if (tours.length === 0) {
    return (
      <div>
        <h2>No tours...</h2>
        <button onClick={() => dataTours()}>Refresh</button>
      </div>
    );
  }
  return (
    <div>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
};

export default Bitis;
