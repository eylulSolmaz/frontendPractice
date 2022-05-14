import Liste from "./components/Liste";
import { StoreProvider } from "./store";

function App() {
  return (
    <StoreProvider>
      <Liste />
    </StoreProvider>
  );
}

export default App;
