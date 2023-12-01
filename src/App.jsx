import { useState } from "react";
import "./App.css";

function App() {
  const API = "https://api.adviceslip.com/advice";
  const [advice, setAdvice] = useState("Never give up!");
  const [id, setId] = useState(0);

  const getAdvice = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setId(data.slip.id);
      setAdvice(data.slip.advice);
      console.log(data);
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <div className="mainContainer">
      <div className="container">
        <p className="adviceId">Advice #{id}</p>
        <p className="advice">{advice}</p>
        <img
          className="pattern"
          src="pattern-divider-mobile.svg"
          alt="Pattern divider"
        />
        <div className="dice-container">
          <img className="dice-icon" src="icon-dice.svg" alt="Icon Dice" />
        </div>
      </div>
    </div>
  );
}

export default App;
