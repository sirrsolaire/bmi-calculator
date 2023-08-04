import { useReducer } from "react";
import "./App.css";

const initialStates = {
  weight: 40,
  height: 140,
};

function reducer(state, action) {
  switch (action.type) {
    case "weight":
      return { ...state, weight: action.payload };
    case "height":
      return { ...state, height: action.payload };
    default:
      throw new Error("Unknown error");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialStates);
  const { weight, height } = state;

  function setWeight(e) {
    dispatch({ type: "weight", payload: Number(e.target.value) });
  }
  function setHeight(e) {
    dispatch({ type: "height", payload: Number(e.target.value) });
  }

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
          onChange={handleWeight}
          type="range"
          step={1}
          min={40}
          max={220}
          style={{ width: 300 }}
        ></input>
        <h3>Height: {height} cm</h3>
        <input
          value={height}
          onChange={handleHeight}
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
