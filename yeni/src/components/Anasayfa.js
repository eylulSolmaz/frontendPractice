import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { StoreContext } from "../store";

const Anasayfa = () => {
  const context = useContext(StoreContext);

  const handleChange = () => {
    context.setCount(context.count + 1);
  };

  return (
    <div>
      <h1>{context.count}</h1>
      <Button onClick={handleChange}>Değiştir</Button>
    </div>
  );
};
export default Anasayfa;
