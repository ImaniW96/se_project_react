import React, { useState } from "react";
import "./ToggleSwitch.css";
const ToggleSwitch = () => {
  const [currentTemperatureUnit, handleToggleChange] = useState("C");
  const handleChange = (e) => {
    if (currentTemperatureUnit === "C") handleToggleChange("F");
    if (currentTemperatureUnit === "F") handleToggleChange("C");
  };
  console.log(currentTemperatureUnit);
  return (
    <label className="switch">
      <input type="checkbox" className="switch__box" onChange={handleChange} />
      <span
        className={
          currentTemperatureUnit === "F"
            ? "switch__slider switch__slider-F"
            : "switch__slider switch__sider-C"
        }
      ></span>
      <p
        className={`switch__temp-F ${
          currentTemperatureUnit === "F" && "switch__slider-F"
        }`}
      >
        F
      </p>
      <p
        className={`switch__temp-C ${
          currentTemperatureUnit === "C" && "switch__slider-C"
        }`}
      >
        C
      </p>
    </label>
  );
};
export default ToggleSwitch;
