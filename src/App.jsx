import { useState } from "react";
import "./App.css";

function App() {
  const API = "https://api.adviceslip.com/advice";
  const [advice, setAdvice] = useState("");

  const getAdvice = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setAdvice(data.slip.advice);
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <div>
      <button onClick={() => getAdvice()}>Click me</button>
      <p>{advice}</p>
    </div>
  );
}

export default App;
