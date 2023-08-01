import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <Home/>
    </>
  );
}

export default App;
