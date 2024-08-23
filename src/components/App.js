import React, { useState } from "react";
import '../styles/App.css';

const App = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [l_value, setLValue] = useState("");
  const [c, setC] = useState(0);

  const firs = (e) => {
    setFirst(e.target.value);
  };

  const secon = (e) => {
    setSecond(e.target.value);
  };

  const sub = () => {
    setC(0);
    if (first.trim() === "" || second.trim() === "") {
      return alert("Enter value");
    }

    let count = 0;
    for (let i of first.toLowerCase()) {
      for (let j of second.toLowerCase()) {
        if (i === j) {
          count++;
        }
      }
    }

    if (count >= 6) {
      count = count % 6;
    }
    count--;

    switch (count) {
      case 0:
        setLValue("Siblings");
        break;
      case 1:
        setLValue("Friends");
        break;
      case 2:
        setLValue("Love");
        break;
      case 3:
        setLValue("Affection");
        break;
      case 4:
        setLValue("Marriage");
        break;
      case 5:
        setLValue("Enemy");
        break;
      // default:
      //   setLValue("");
    }
  };

  const rest = () => {
    setC(0);
    setFirst("");
    setSecond("");
    setLValue("");
  };

  return (
    <div id="main">
      {/* Do not remove the main div */}
      <input
        type="text"
        placeholder="first_name"
        onChange={firs}
        value={first}
        required
      />
      <input
        type="text"
        placeholder="second_name"
        onChange={secon}
        value={second}
        required
      />
      <button onClick={sub} style={{ color: "#6FC1E2" }} data-testid="calculate_relationship">
        Calculate Relationship Future
      </button>
      <button onClick={rest} style={{ color: "#6FC1E2" }} data-testid="clear">
        Clear
      </button>

      <h3 data-testid="answer">{l_value}
        </h3>
    </div>
  );
};

export default App;


