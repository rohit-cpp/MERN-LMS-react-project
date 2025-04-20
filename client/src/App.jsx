import { useState } from "react";

import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button className="bg-amber-700">Check</Button>
    </div>
  );
}

export default App;
