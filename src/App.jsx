import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";

function App() {
  const [count, setCount] = useState(0);
  const [theam, setTheam] = useState("light");
  return (
    <div className={`${theam} ${theam == 'dark'?'bg-[121212]':null} h-[100vh]`}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
