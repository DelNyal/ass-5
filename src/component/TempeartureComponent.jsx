import React, { useState } from "react";
import "../styles/converter.css";
import { useAppContext } from "../context/AppContext";

const TemperatureComponent = () => {
  const { isDarkTheme } = useAppContext();
  // State to hold Fahrenheit input value
  const [fahrenheit, setFahrenheit] = useState("");
  // State to hold Celsius input value
  const [celsius, setCelsius] = useState("");
  // State to track the current unit (F or C)
  const [unit, setUnit] = useState("F");

  // Function to handle Fahrenheit input change
  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    // Update Fahrenheit state with input value
    setFahrenheit(value);
    if (!isNaN(value)) {
      // Convert Fahrenheit to Celsius and update Celsius state
      const convertedCelsius = (((parseFloat(value) - 32) * 5) / 9).toFixed(2);
      setCelsius(convertedCelsius);
    } else {
      // If input is not a number, clear Celsius state
      setCelsius("");
    }
  };

  // Function to handle Celsius input change
  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    // Update Celsius state with input value
    setCelsius(value);
    if (!isNaN(value)) {
      // Convert Celsius to Fahrenheit and update Fahrenheit state
      const convertedFahrenheit = ((parseFloat(value) * 9) / 5 + 32).toFixed(2);
      setFahrenheit(convertedFahrenheit);
    } else {
      // If input is not a number, clear Fahrenheit state
      setFahrenheit("");
    }
  };

  // Function to handle unit switch (Fahrenheit to Celsius and vice versa)
  const handleSwitch = () => {
    // Toggle unit between F and C
    setUnit(unit === "F" ? "C" : "F");
    // Swap Fahrenheit and Celsius values
    const temp = fahrenheit;
    setFahrenheit(celsius);
    setCelsius(temp);
  };

  return (
    <div className="converter">
      <h2>Temperature Converter</h2>
      <div className="cover">
        {/* Fahrenheit input */}

        <div className="input-group">
          <input
            className="convert"
            type="text"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
          />
          <span className="unit">
            {unit === "F" ? "Fahrenheit" : "Celsius"}
          </span>
        </div>
        {/* Button to switch between Fahrenheit and Celsius */}
        <button onClick={handleSwitch} className="switch-btn">
          <img
            width={30}
            height={30}
            src={
              isDarkTheme
                ? "https://cdn-icons-png.flaticon.com/128/10771/10771426.png"
                : "https://cdn-icons-png.flaticon.com/128/10772/10772014.png"
            }
            alt="Switch"
          />
        </button>
        {/* Celsius input */}
        <div className="input-group">
          <input
            className="convert"
            type="text"
            value={celsius}
            onChange={handleCelsiusChange}
          />
          <span className="unit">
            {unit === "F" ? "Celsius" : "Fahrenheit"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TemperatureComponent;
