import Routers from "./Routers";
import { StoreContext } from "./store";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  return (
    <StoreContext.Provider value={{ count, setCount, name, setName }}>
      <Routers />
    </StoreContext.Provider>
  );
}
export default App;
