import React, { useContext } from "react";
import { StoreContext } from "../store";

const Hakkimizda = () => {
  const context = useContext(StoreContext);
  return (
    <div>
      Hakkimizda
      <h2>{context.count}</h2>
      <h2>{context.name}</h2>
    </div>
  );
};

export default Hakkimizda;
