import { useState } from "react";
import "./App.css";
import Navbar from "./compnents/Navbar/Navbar";
import Home from "./compnents/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <div id="app-container">
        <Home />
      </div>
    </div>
  );
}

export default App;
