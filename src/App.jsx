import { useState } from "react";
import "./App.css";

function App() {
  const API = "https://api.adviceslip.com/advice";
  const initialAdvice = "https://api.adviceslip.com/advice/127";
  const [advice, setAdvice] = useState(initialAdvice);
  const [id, setId] = useState(127);

  window.onload = () => {
    (async () => {
      try {
        const response = await fetch(initialAdvice);
        const data = await response.json();
        setAdvice(data.slip.advice);
        console.log(data.slip.advice);
      } catch (e) {
        console.error(e.message);
      }
    })();
  };

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
          src="pattern-divider-desktop.svg"
          alt="Pattern divider"
        />
      </div>
      <div className="dice-container" onClick={() => getAdvice()}>
        <img className="dice-icon" src="icon-dice.svg" alt="Icon Dice" />
      </div>
    </div>
  );
}

export default App;
