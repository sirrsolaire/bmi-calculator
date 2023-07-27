import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(40);
  const [height, setHeight] = useState(140);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="container">
        <div>
          <Title />
          <Counter
            handleWeight={setWeight}
            weight={weight}
            height={height}
            handleHeight={setHeight}
          />
          <Result weight={weight} height={height} />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div>
      <h1>BMI CALCULATOR</h1>
    </div>
  );
}

function Counter({ handleWeight, weight, height, handleHeight }) {
  return (
    <div>
      <div className="counter">
        <h3>Weight: {weight} kg</h3>
        <input
          value={weight}
          onChange={(e) => handleWeight(Number(e.target.value))}
          type="range"
          step={1}
          min={40}
          max={220}
          style={{ width: 300 }}
        ></input>
        <h3>Height: {height} cm</h3>
        <input
          value={height}
          onChange={(e) => handleHeight(Number(e.target.value))}
          type="range"
          step={1}
          min={140}
          max={300}
          style={{ width: 300 }}
        ></input>
      </div>
    </div>
  );
}

function Result({ weight, height }) {
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  return (
    <div className="result-container">
      <h3>Your BMI is</h3>
      <div>
        <span className="result">{bmi.toFixed(2)}</span>
      </div>
    </div>
  );
}
export default App;
