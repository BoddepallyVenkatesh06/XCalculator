import React, { useState } from "react";
import "./styles.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    if (input.trim() === "") {
      setResult("Error: Incomplete expression");
    } else {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult("Error");
      }
    }
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <div className="input-box">
        <input type="text" value={input} readOnly />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {[7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "C", 0, "=", "/"].map(
          (item, index) => (
            <button
              key={index}
              onClick={() => {
                if (item === "=") {
                  handleCalculate();
                } else if (item === "C") {
                  handleClear();
                } else {
                  handleButtonClick(item);
                }
              }}
            >
              {item}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default App;
